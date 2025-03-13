<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$post_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($post_id === 0) {
    echo json_encode(["success" => false, "error" => "Invalid post ID"]);
    exit;
}

$sql = "SELECT id, title, content, created_at, board_id, image_url FROM posts WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $post_id);
$stmt->execute();
$post_result = $stmt->get_result()->fetch_assoc();
$stmt->close();

$sql = "SELECT content, created_at FROM comments WHERE post_id = ? ORDER BY created_at DESC";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $post_id);
$stmt->execute();
$comment_result = $stmt->get_result();

$comments = [];
while ($row = $comment_result->fetch_assoc()) {
    $comments[] = $row;
}

$conn->close();

// 데이터 반환
echo json_encode([
    "success" => true,
    "post" => $post_result,
    "comments" => $comments
]);
?>
