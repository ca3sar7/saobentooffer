<?php
// ============================================================================
// CONFIGURAÇÃO DO BACKEND - SISTEMA PIX BUCKPAY (KIT SÃO BENTO)
// ============================================================================

function loadDotEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if (empty($line) || strpos($line, '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value, " \t\n\r\0\x0B\"'");
            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv("{$name}={$value}");
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }
    }
}

loadDotEnv(__DIR__ . '/.env');

// Modalidades de Frete e Valores Permitidos no Servidor (em centavos)
define('SHIPPING_RATES', [
    'pac'     => 1268, // PAC R$ 12,68
    'sedex'   => 1375, // SEDEX R$ 13,75
    'express' => 1743  // SEDEX Expresso R$ 17,43
]);

define('ALLOWED_AMOUNTS', [1268, 1375, 1743]);

// Credenciais da BuckPay API
define('BUCKPAY_TOKEN', getenv('BUCKPAY_TOKEN') ?: 'sk_live_e77fe478f994c90fb5951f6c396adfb6');
define('BUCKPAY_USER_AGENT', getenv('BUCKPAY_USER_AGENT') ?: 'Buckpay API');
define('BUCKPAY_BASE_URL', rtrim(getenv('BUCKPAY_BASE_URL') ?: 'https://api.realtechdev.com.br', '/'));
define('WEBHOOK_PUBLIC_URL', getenv('WEBHOOK_PUBLIC_URL') ?: '');
define('USE_PROXY_IP', filter_var(getenv('USE_PROXY_IP') ?: false, FILTER_VALIDATE_BOOLEAN));

// Diretórios da Aplicação
define('BASE_DIR', __DIR__);
define('STORAGE_DIR', BASE_DIR . '/storage');
define('LOGS_DIR', BASE_DIR . '/logs');
define('DATA_DIR', BASE_DIR . '/data');

// Criar diretórios de armazenamento e logs com proteção .htaccess
foreach ([STORAGE_DIR . '/rate_limits', STORAGE_DIR . '/pix_cache', LOGS_DIR, DATA_DIR] as $dir) {
    if (!file_exists($dir)) {
        @mkdir($dir, 0755, true);
    }
    $htaccessFile = dirname($dir) . '/.htaccess';
    if (!file_exists($htaccessFile)) {
        @file_put_contents($htaccessFile, "<IfModule mod_authz_core.c>\n    Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n    Deny from all\n</IfModule>\n");
    }
}

// Repertório de perfis de compradores para fallback/rotação se necessário
define('DONOR_PROFILES', [
    [
        'name' => 'Elvis Da Silva araujo',
        'email' => 'piquepg@hotmail.com',
        'phone' => '5513997501570',
        'document' => '25866348888'
    ],
    [
        'name' => 'Jakson lobo farias',
        'email' => 'jakson.lobo2018@gmail.com',
        'phone' => '5555519922889',
        'document' => '03965911082'
    ],
    [
        'name' => 'Gabriel fortuna da silva',
        'email' => 'gbfortuna18@gmail.com',
        'phone' => '5555479883536',
        'document' => '15698250766'
    ],
    [
        'name' => 'Francisco Cleyton Nascimento de Oliveira',
        'email' => 'cleytonnascimento074@gmail.com',
        'phone' => '5585992517524',
        'document' => '06159715399'
    ],
    [
        'name' => 'Maximiliano Batista da Silva Teixeira',
        'email' => 'mbatistadasilva093@gmail.com',
        'phone' => '5551986487027',
        'document' => '02809694060'
    ],
    [
        'name' => 'Ryan Cristhian de Sousa Silva',
        'email' => 'ryancristhian577@gmail.com',
        'phone' => '5585997105246',
        'document' => '63331293300'
    ],
    [
        'name' => 'Iago Lopez Sampaio',
        'email' => 'iagopixogreen@gmail.com',
        'phone' => '5511918408035',
        'document' => '48117434822'
    ],
    [
        'name' => 'Renato Seabra de Almeida Filho',
        'email' => 'rebatobrito20@hotmail.com',
        'phone' => '5522998555657',
        'document' => '13627704770'
    ]
]);

function getNextDonorProfile() {
    $profiles = DONOR_PROFILES;
    if (empty($profiles)) {
        return [
            'name' => 'Robson Jorge da Silva Marforri',
            'email' => 'raizo.marforri@gmail.com',
            'phone' => '5511978826618',
            'document' => '32024955851'
        ];
    }
    $counterFile = STORAGE_DIR . '/donor_counter.txt';
    $idx = 0;
    if (file_exists($counterFile)) {
        $idx = (int)@file_get_contents($counterFile);
    }
    $profile = $profiles[$idx % count($profiles)];
    @file_put_contents($counterFile, ($idx + 1) % count($profiles));
    return $profile;
}

// Funções de Validação e Sanitização
function validateName($name) {
    $name = trim((string)$name);
    if (empty($name)) return false;
    return strlen($name) >= 3;
}

function validateEmail($email) {
    $email = trim((string)$email);
    return (bool)filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validateAndSanitizePhone($phone) {
    $clean = preg_replace('/[^0-9]/', '', (string)$phone);
    $len = strlen($clean);
    if ($len === 10 || $len === 11) {
        $clean = '55' . $clean;
        $len = strlen($clean);
    }
    if ($len === 12 || $len === 13) {
        return $clean;
    }
    return false;
}

function validateCPF($cpf) {
    $cpf = preg_replace('/[^0-9]/', '', (string)$cpf);
    if (strlen($cpf) !== 11) return false;
    if (preg_match('/^(\d)\1{10}$/', $cpf)) return false;
    for ($t = 9; $t < 11; $t++) {
        for ($d = 0, $c = 0; $c < $t; $c++) {
            $d += (int)$cpf[$c] * (($t + 1) - $c);
        }
        $d = ((10 * $d) % 11) % 10;
        if ((int)$cpf[$c] !== $d) return false;
    }
    return true;
}

function maskCpf($cpf) {
    $clean = preg_replace('/[^0-9]/', '', $cpf);
    if (strlen($clean) === 11) {
        return substr($clean, 0, 3) . '.***.***-' . substr($clean, -2);
    }
    return '***.***.***-**';
}

function logError($message) {
    $logFile = LOGS_DIR . '/pix_errors.log';
    $timestamp = date('Y-m-d H:i:s');
    @file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}
