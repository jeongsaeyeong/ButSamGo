<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
include "db.php";

$board_id = isset($_GET['board_id']) ? intval($_GET['board_id']) : 3;

$sql = "SELECT posts.id, posts.title, posts.content, posts.created_at, posts.board_id, posts.image_url,
               COUNT(comments.id) AS comment_count
        FROM posts
        LEFT JOIN comments ON posts.id = comments.post_id
        WHERE posts.board_id = ?
        GROUP BY posts.id
        ORDER BY posts.created_at DESC";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $board_id);
$stmt->execute();
$result = $stmt->get_result();

$posts = [];
while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
}

$stmt->close();
$conn->close();

echo json_encode($posts);
?>
