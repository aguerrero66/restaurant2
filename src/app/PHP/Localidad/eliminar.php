<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");



$del = "DELETE FROM localidad WHERE id_localidad=" . $_GET['id'];

if (!$resultado = mysqli_query($conexion, $del)) {
    die("Error en la consulta: " . mysqli_error($conexion));
};




class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'Localidad eliminada';

header('Content-Type:application/json');
echo json_encode ($response);
?>
