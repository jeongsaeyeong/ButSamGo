<?php
include "db.php";

$data = json_decode(file_get_contents("php://input"));
$email = $data->useremail;
$name = $data->username;
$password = password_hash($data->userpass, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $name, $password);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}
?>
