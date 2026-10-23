<?php
require_once __DIR__ . '/../../config.php';

header('Content-Type: application/json; charset=utf-8');

function respondOk($message = 'Webhook recebido com sucesso') {
    http_response_code(200);
    echo json_encode(['ok' => true, 'message' => $message]);
    exit;
}

$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    $rawInput = file_get_contents('php://stdin');
}
$data = json_decode($rawInput, true) ?: [];

$external_id = preg_replace('/[^a-zA-Z0-9_-]/', '', (string)($data['external_id'] ?? $data['data']['external_id'] ?? ''));

if (empty($external_id)) {
    respondOk('Webhook sem external_id');
}

$cacheFile = STORAGE_DIR . '/pix_cache/' . md5($external_id) . '.json';
if (!file_exists($cacheFile)) {
    respondOk('external_id não encontrado no cache local');
}

$apiUrl = BUCKPAY_BASE_URL . '/v1/transactions/external_id/' . urlencode($external_id);

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPGET => true,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Authorization: Bearer ' . BUCKPAY_TOKEN,
        'User-Agent: ' . BUCKPAY_USER_AGENT
    ],
    CURLOPT_TIMEOUT => 12,
    CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
    CURLOPT_SSL_VERIFYPEER => false
]);

$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300 && !empty($responseBody)) {
    $apiResp = json_decode($responseBody, true);
    $remoteStatus = strtolower($apiResp['status'] ?? $apiResp['data']['status'] ?? '');

    if (in_array($remoteStatus, ['paid', 'approved', 'completed', 'processed', 'success', 'pago'], true)) {
        $localData = json_decode(file_get_contents($cacheFile), true) ?: [];
        $localData['status'] = 'paid';
        $localData['paid'] = true;
        @file_put_contents($cacheFile, json_encode($localData));
        respondOk('Transação confirmada e atualizada para PAID com sucesso');
    }
}

respondOk('Webhook processado sem alteração de status');
