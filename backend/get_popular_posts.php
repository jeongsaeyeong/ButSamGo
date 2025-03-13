<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "db.php";

$sql = "
    SELECT p.id, p.title, p.content, b.name AS board_name, COUNT(c.id) AS comment_count
    FROM posts p
    LEFT JOIN comments c ON p.id = c.post_id
    LEFT JOIN boards b ON p.board_id = b.id
    WHERE p.board_id IN (3, 4)
    GROUP BY p.id
    ORDER BY comment_count DESC, p.created_at DESC
    LIMIT 4
";

$result = $conn->query($sql);

$popularPosts = [];
while ($row = $result->fetch_assoc()) {
    $popularPosts[] = $row;
}

$conn->close();

echo json_encode([
    "success" => true,
    "posts" => $popularPosts
]);
?>
