<?php
require_once 'db.php';

$nome = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$senha = $_POST['password'] ?? '';

if (!$nome || !$email || !$senha) {
    echo "Dados inválidos";
    exit;
}

// verificar se já existe
$stmt = $pdo->prepare("SELECT id FROM usuarios WHERE email = ?");
$stmt->execute([$email]);

if ($stmt->fetch()) {
    echo "E-mail já cadastrado!";
    exit;
}

// hash da senha
$senhaHash = password_hash($senha, PASSWORD_DEFAULT);

// inserir
$stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)");
$stmt->execute([$nome, $email, $senhaHash]);

echo "Cadastro realizado com sucesso!";
?>