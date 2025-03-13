<?php
header("Content-Type: application/json"); // JSON 응답 설정
include "db.php";

$data = json_decode(file_get_contents("php://input"));
if (!$data) {
    echo json_encode(["success" => false, "error" => "Invalid JSON input"]);
    exit();
}

$email = $data->useremail;
$password = $data->userpass;

$sql = "SELECT id, password FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(["success" => false, "error" => "SQL prepare error"]);
    exit();
}
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $hashed_password);
$stmt->fetch();

if ($stmt->num_rows > 0 && password_verify($password, $hashed_password)) {
    echo json_encode(["success" => true, "id" => $id]);
} else {
    echo json_encode(["success" => false, "error" => "Invalid credentials"]);
}
?>
