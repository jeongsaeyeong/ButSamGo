<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
include "db.php";

$sql = "SELECT id, title, content, created_at, board_id FROM posts WHERE board_id = 1 ORDER BY created_at DESC";
$result = $conn->query($sql);

$schedules = [];
while ($row = $result->fetch_assoc()) {
    $schedules[] = $row;
}

$conn->close();
echo json_encode($schedules);
?>
