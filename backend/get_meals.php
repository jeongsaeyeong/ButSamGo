<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
include "db.php";

$today = date('Y-m-d');

$sql = "SELECT * FROM meals WHERE schedule_date >= ? ORDER BY schedule_date";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $today);
$stmt->execute();
$result = $stmt->get_result();

$meals = [];
while ($row = $result->fetch_assoc()) {
    $meals[] = $row;
}

echo json_encode(["success" => true, "meals" => $meals]);

$stmt->close();
$conn->close();
?>
