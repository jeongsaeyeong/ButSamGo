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
$password = $conn->real_escape_string($data->password); 

$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if ($password === $user['password']) {
        echo json_encode(["success" => "Login successful"]);
    } else {
        echo json_encode(["error" => "Invalid password"]);
    }
} else {
    echo json_encode(["error" => "User not found"]);
}
?>
