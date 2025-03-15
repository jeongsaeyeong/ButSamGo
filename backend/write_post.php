<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$user_id = intval($_POST['user_id']);
$board_id = intval($_POST['board_id']);
$title = $conn->real_escape_string($_POST['title']);
$content = $conn->real_escape_string($_POST['content']);
$schedule_date = isset($_POST['schedule_date']) ? $_POST['schedule_date'] : null;
$imageUrl = isset($_POST['existing_image']) ? $_POST['existing_image'] : '';

$uploadDir = __DIR__ . "/uploads/";

if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $fileTmp = $_FILES['image']['tmp_name'];
    $fileName = uniqid() . '_' . $_FILES['image']['name'];
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($fileTmp, $filePath)) {
        $imageUrl = "http://butsamgo.dothome.co.kr/backend/uploads/" . $fileName;
    } else {
        echo json_encode(["success" => false, "error" => "파일 업로드에 실패했습니다."]);
        exit;
    }
}

$sql = "INSERT INTO posts (user_id, board_id, title, content, image_url, schedule_date, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iissss", $user_id, $board_id, $title, $content, $imageUrl, $schedule_date);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
