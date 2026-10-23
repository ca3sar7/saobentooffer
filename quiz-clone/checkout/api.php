<?php
// Roteador unificado para o checkout apontando para a API BuckPay
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$action = $_GET['action'] ?? $_GET['endpoint'] ?? '';

if ($action === 'create-payment' || $action === 'create') {
    require_once __DIR__ . '/../api/pix/create.php';
    exit;
}

if ($action === 'payment-status' || $action === 'status') {
    require_once __DIR__ . '/../api/pix/status.php';
    exit;
}

if ($action === 'webhook') {
    require_once __DIR__ . '/../api/pix/webhook.php';
    exit;
}

http_response_code(400);
echo json_encode(['error' => 'Ação não reconhecida']);
