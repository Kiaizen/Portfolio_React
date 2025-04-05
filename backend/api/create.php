<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$mobile = $data['mobile'];
$password = $data['password'];

$sql = "INSERT INTO crud (name, email, mobile, password) VALUES ('$name', '$email', '$mobile', '$password')";
if ($con->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $con->error]);
}
?>
