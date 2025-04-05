<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];

$sql = "DELETE FROM crud WHERE id=$id";
if ($con->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $con->error]);
}
?>
