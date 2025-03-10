<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "db.php";

$data = json_decode(file_get_contents("php://input"));

if (!$data->username || !$data->password) {
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$username = $conn->real_escape_string($data->username);
$password = password_hash($data->password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql)) {
    echo json_encode(["success" => "User registered"]);
} else {
    echo json_encode(["error" => "Registration failed"]);
}
?>
