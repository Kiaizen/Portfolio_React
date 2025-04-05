<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$name = $data['name'];
$email = $data['email'];
$mobile = $data['mobile'];
$password = $data['password'];

$sql = "UPDATE crud SET name='$name', email='$email', mobile='$mobile', password='$password' WHERE id=$id";
if ($con->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $con->error]);
}
?>
