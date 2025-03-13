<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

// POST 데이터 가져오기
$data = json_decode(file_get_contents("php://input"));

// 필수 데이터 체크
if (!isset($data->post_id)) {
    echo json_encode(["success" => false, "error" => "post_id가 필요합니다."]);
    exit;
}

$post_id = intval($data->post_id);

// 댓글 먼저 삭제
$deleteComments = $conn->prepare("DELETE FROM comments WHERE post_id = ?");
$deleteComments->bind_param("i", $post_id);
$deleteComments->execute();
$deleteComments->close();

// 게시글 삭제
$deletePost = $conn->prepare("DELETE FROM posts WHERE id = ?");
$deletePost->bind_param("i", $post_id);

if ($deletePost->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $deletePost->error]);
}

$deletePost->close();
$conn->close();
?>
