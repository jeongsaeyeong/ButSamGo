<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->post_id) || !isset($data->content) || !isset($data->user_id)) {
    echo json_encode(["success" => false, "error" => "필수 데이터가 누락되었습니다."]);
    exit;
}

$post_id = intval($data->post_id);
$content = $conn->real_escape_string($data->content);
$user_id = intval($data->user_id);

$sql = "INSERT INTO comments (post_id, user_id, content, created_at) VALUES (?, ?, ?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iis", $post_id, $user_id, $content);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
