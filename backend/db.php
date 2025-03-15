<?php
$host = "localhost";
$user = "butsamgo";
$password = "Grace03090*";
$dbname = "butsamgo";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}
?>
