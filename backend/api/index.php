<?php
// Habilitar CORS
header("Access-Control-Allow-Origin: *"); // ou coloque http://localhost:5173 pra limitar
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Tratar requisição OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include '../db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$uri = explode('/', parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$id = end($uri);
$id = is_numeric($id) ? intval($id) : null;

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM crud";
        $result = mysqli_query($con, $sql);

        $users = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $users[] = $row;
        }

        echo json_encode($users);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $sql = "INSERT INTO crud (name, email, mobile, password) VALUES (?,?,?,?)";
        $stmt = mysqli_prepare($con, $sql);
        mysqli_stmt_bind_param($stmt, "ssss", $data['name'], $data['email'], $data['mobile'], $data['password']);
        mysqli_stmt_execute($stmt);
        echo json_encode(["message" => "Usuário criado com sucesso"]);
        break;

    case 'PUT':
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID inválido"]);
            exit();
        }
        $data = json_decode(file_get_contents('php://input'), true);
        $sql = "UPDATE crud SET name=?, email=?, mobile=?, password=? WHERE id=?";
        $stmt = mysqli_prepare($con, $sql);
        mysqli_stmt_bind_param($stmt, "ssssi", $data['name'], $data['email'], $data['mobile'], $data['password'], $id);
        mysqli_stmt_execute($stmt);
        echo json_encode(["message" => "Usuário atualizado com sucesso"]);
        break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID inválido"]);
            exit();
        }
        $sql = "DELETE FROM crud WHERE id=?";
        $stmt = mysqli_prepare($con, $sql);
        mysqli_stmt_bind_param($stmt, "i", $id);
        mysqli_stmt_execute($stmt);
        echo json_encode(["message" => "Usuário deletado com sucesso"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método não permitido"]);
        break;
}
?>