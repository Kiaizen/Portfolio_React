<?php
$host = 'localhost';
$user = 'root';
$password = '1234';
$dbname = 'crudOperation';

$con = new mysqli($host, $user, $password, $dbname);

if ($con->connect_error) {
    die(json_encode(["error" => "Falha na conexão: " . $con->connect_error]));
}
?>
