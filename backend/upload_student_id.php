<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); // 모든 오류 출력

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include "db.php";

$userId = intval($_POST['user_id']);
$uploadDir = __DIR__ . "/uploads/";
$imageUrl = null;

// ✅ uploads 폴더가 없다면 생성
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if (isset($_FILES['student_id']) && $_FILES['student_id']['error'] === UPLOAD_ERR_OK) {
    $fileTmp = $_FILES['student_id']['tmp_name'];
    $fileName = uniqid() . '_' . $_FILES['student_id']['name']; 
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($fileTmp, $filePath)) {
        chmod($filePath, 0644); // ✅ 권한 설정
        $imageUrl = "http://ooooo0516.dothome.co.kr/backend/uploads/" . $fileName;

        $sql = "UPDATE users SET student_id_image = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("si", $imageUrl, $userId);

            if ($stmt->execute()) {
                echo json_encode(["success" => true, "image_url" => $imageUrl]);
            } else {
                echo json_encode(["success" => false, "error" => $stmt->error]);
            }

            $stmt->close();
        } else {
            echo json_encode(["success" => false, "error" => "SQL Prepare 실패: " . $conn->error]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "파일 업로드 실패: " . $_FILES['student_id']['error']]);
    }
} else {
    echo json_encode(["success" => false, "error" => "파일이 존재하지 않거나 오류가 발생했습니다."]);
}

$conn->close();
?>
