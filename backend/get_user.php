<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$userid = intval($_GET['userid']);

$sql = "SELECT id, name, student_id_image FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userid);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (!empty($user['student_id_image'])) {
        $user['student_id_image'] = $user['student_id_image'];
    }

    echo json_encode(["success" => true, "user" => $user]);
} else {
    echo json_encode(["success" => false, "error" => "유저를 찾을 수 없습니다."]);
}

$stmt->close();
$conn->close();
?>
