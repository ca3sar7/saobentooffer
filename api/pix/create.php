<?php
require_once __DIR__ . '/../../config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}

$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    $rawInput = file_get_contents('php://stdin');
}
$input = json_decode($rawInput, true);

if (!$input || !is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Corpo da requisição inválido']);
    exit;
}

// ----------------------------------------------------------------------------
// 1. CÁLCULO E VALIDAÇÃO DO VALOR (EM CENTAVOS)
// ----------------------------------------------------------------------------
$shippingType = strtolower(trim((string)($input['shipping'] ?? 'pac')));
if (array_key_exists($shippingType, SHIPPING_RATES)) {
    $amount = SHIPPING_RATES[$shippingType];
} else {
    $amount = (int)($input['amount'] ?? 1268);
}

if (!in_array($amount, ALLOWED_AMOUNTS, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Valor não permitido. Selecione uma modalidade de frete válida.']);
    exit;
}

// ----------------------------------------------------------------------------
// 2. RATE LIMITING POR IP (10 requisições a cada 10 min)
// ----------------------------------------------------------------------------
if (USE_PROXY_IP && !empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $clientIp = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
} else {
    $clientIp = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
}

$ipHash = md5($clientIp);
$rateLimitFile = STORAGE_DIR . '/rate_limits/' . $ipHash . '.json';

$now = time();
$timeWindow = 600;
$maxRequests = 10;

$timestamps = [];
if (file_exists($rateLimitFile)) {
    $data = json_decode(file_get_contents($rateLimitFile), true);
    if (is_array($data)) {
        $timestamps = array_filter($data, function ($ts) use ($now, $timeWindow) {
            return ($now - $ts) < $timeWindow;
        });
    }
}

if (count($timestamps) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['error' => 'Limite de requisições excedido. Por favor, aguarde alguns minutos para tentar novamente.']);
    exit;
}

$timestamps[] = $now;
@file_put_contents($rateLimitFile, json_encode(array_values($timestamps)));

// ----------------------------------------------------------------------------
// 3. IDENTIFICADOR EXTERNO E IDEMPOTÊNCIA
// ----------------------------------------------------------------------------
$rawSessionId = (string)($input['sessionId'] ?? $input['orderId'] ?? '');
$sessionId = preg_replace('/[^a-zA-Z0-9_-]/', '', $rawSessionId);
if (empty($sessionId)) {
    $sessionId = 'sess_' . bin2hex(random_bytes(8));
}

$tentativa = max(1, (int)($input['tentativa'] ?? 1));
$external_id = "{$sessionId}_{$amount}_{$tentativa}";
$cacheFile = STORAGE_DIR . '/pix_cache/' . md5($external_id) . '.json';

if (file_exists($cacheFile)) {
    $cacheAge = time() - filemtime($cacheFile);
    if ($cacheAge < 1800) {
        $cachedData = json_decode(file_get_contents($cacheFile), true);
        if ($cachedData && !empty($cachedData['copia_cola'])) {
            $cachedData['cached'] = true;
            http_response_code(200);
            echo json_encode($cachedData);
            exit;
        }
    }
}

// ----------------------------------------------------------------------------
// 4. PREPARAÇÃO DOS DADOS DO COMPRADOR
// ----------------------------------------------------------------------------
$customer = $input['customer'] ?? $input['buyer'] ?? [];

$name = trim((string)($customer['name'] ?? ''));
$email = trim((string)($customer['email'] ?? ''));
$rawPhone = (string)($customer['phone'] ?? '');
$rawDoc = (string)($customer['document'] ?? $customer['cpf'] ?? '');

$phoneClean = validateAndSanitizePhone($rawPhone);
$docClean = preg_replace('/[^0-9]/', '', $rawDoc);

// Fallback para rotação de perfis se os campos estiverem ausentes
if (empty($name) || strlen($name) < 3 || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $donor = getNextDonorProfile();
    $name = !empty($name) && strlen($name) >= 3 ? $name : $donor['name'];
    $email = !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : $donor['email'];
    if ($phoneClean === false) $phoneClean = $donor['phone'];
    if (strlen($docClean) !== 11) $docClean = $donor['document'];
}

if ($phoneClean === false) {
    $phoneClean = '5511999998888';
}
if (strlen($docClean) !== 11) {
    $docClean = '32024955851';
}

$payload = [
    'payment_method' => 'pix',
    'amount' => $amount,
    'external_id' => $external_id,
    'buyer' => [
        'name' => $name,
        'email' => $email,
        'phone' => $phoneClean,
        'document' => $docClean
    ]
];

// ----------------------------------------------------------------------------
// 5. TRACKING E METADATA (Todas as 9 chaves exigidas pela BuckPay)
// ----------------------------------------------------------------------------
$u = $input['utmParams'] ?? $input['attribution'] ?? [];
if (!is_array($u)) $u = [];

$payload['tracking'] = [
    'ref' => (string)($u['ref'] ?? $u['utm_source'] ?? ''),
    'src' => (string)($u['src'] ?? $u['utm_source'] ?? ''),
    'sck' => (string)($u['sck'] ?? $u['xcod'] ?? ''),
    'utm_source' => (string)($u['utm_source'] ?? ''),
    'utm_medium' => (string)($u['utm_medium'] ?? ''),
    'utm_campaign' => (string)($u['utm_campaign'] ?? ''),
    'utm_id' => (string)($u['utm_id'] ?? ''),
    'utm_term' => (string)($u['utm_term'] ?? ''),
    'utm_content' => (string)($u['utm_content'] ?? '')
];

$address = $input['address'] ?? [];
$payload['metadata'] = [
    'shipping' => $shippingType,
    'product' => 'Kit Bênção de São Bento',
    'address' => is_array($address) ? $address : []
];

if (!empty(WEBHOOK_PUBLIC_URL) && filter_var(WEBHOOK_PUBLIC_URL, FILTER_VALIDATE_URL)) {
    $payload['postbackUrl'] = WEBHOOK_PUBLIC_URL;
}

// ----------------------------------------------------------------------------
// 6. REQUISIÇÃO À BUCKPAY API
// ----------------------------------------------------------------------------
$apiUrl = BUCKPAY_BASE_URL . '/v1/transactions';

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Accept: application/json',
        'Authorization: Bearer ' . BUCKPAY_TOKEN,
        'User-Agent: ' . BUCKPAY_USER_AGENT
    ],
    CURLOPT_TIMEOUT => 25,
    CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
    CURLOPT_SSL_VERIFYPEER => false
]);

$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr = curl_error($ch);
curl_close($ch);

if ($httpCode < 200 || $httpCode >= 300) {
    logError("BuckPay API Error (HTTP $httpCode): $responseBody | cURL: $curlErr | Payload: " . json_encode($payload));
    http_response_code($httpCode >= 400 && $httpCode < 600 ? $httpCode : 500);
    echo json_encode([
        'error' => 'Falha na comunicação com a API de pagamento BuckPay',
        'detail' => json_decode($responseBody, true) ?: $responseBody
    ]);
    exit;
}

$apiResponse = json_decode($responseBody, true);
$qrCodeData = $apiResponse['data']['pix']['qrcode_base64'] ?? $apiResponse['qrcode'] ?? '';
$copiaColaData = $apiResponse['data']['pix']['code'] ?? $apiResponse['copia_cola'] ?? '';

$outputData = [
    'success' => true,
    'ok' => true,
    'status' => 'pending',
    'paid' => false,
    'external_id' => $external_id,
    'amount' => $amount,
    'amount_formatted' => 'R$ ' . number_format($amount / 100, 2, ',', '.'),
    'qrcode' => $qrCodeData,
    'copia_cola' => $copiaColaData,
    'expires_at' => date('Y-m-d H:i:s', time() + 300),
    'created_at' => date('Y-m-d H:i:s')
];

@file_put_contents($cacheFile, json_encode($outputData));
http_response_code(200);
echo json_encode($outputData);
