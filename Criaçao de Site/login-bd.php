<?php
require_once 'db.php';

$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

if (!$email || !$senha) {
    echo "Dados inválidos";
    exit;
}

// buscar usuário
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
$stmt->execute([$email]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($senha, $user['senha'])) {
    echo "Login válido!";
} else {
    echo "Login inválido!";
}
?>