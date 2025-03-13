<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$userId = intval($_POST['user_id']);

if ($userId) {
    $sql = "DELETE FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);

    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "error" => "유효하지 않은 사용자 ID"]);
}

$conn->close();
?>
