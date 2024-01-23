<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");



$del = "DELETE FROM productos WHERE id_productos=" . $_GET['id'];

if (!$resultado = mysqli_query($conexion, $del)) {
    die("Error en la consulta: " . mysqli_error($conexion));
};




class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'producto eliminado';

header('Content-Type:application/json');
echo json_encode ($response);
?>
