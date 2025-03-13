<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$schedule_date = $_POST['schedule_date'] ?? '';
$content = $_POST['content'] ?? '';

if (empty($schedule_date) || empty($content)) {
    echo json_encode(["success" => false, "error" => "날짜와 내용을 입력하세요."]);
    exit;
}

$sql = "INSERT INTO meals (schedule_date, content) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $schedule_date, $content);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
