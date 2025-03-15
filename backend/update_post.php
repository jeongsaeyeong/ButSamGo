<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
$user_id = isset($_POST['user_id']) ? intval($_POST['user_id']) : 0;
$board_id = isset($_POST['board_id']) ? intval($_POST['board_id']) : 0;
$title = isset($_POST['title']) ? $conn->real_escape_string($_POST['title']) : '';
$content = isset($_POST['content']) ? $conn->real_escape_string($_POST['content']) : '';
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

$sql = "UPDATE posts SET board_id = ?, title = ?, content = ?, image_url = ? WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("isssii", $board_id, $title, $content, $imageUrl, $post_id, $user_id);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
