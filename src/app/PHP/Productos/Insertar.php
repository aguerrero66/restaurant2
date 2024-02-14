<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$precio_neto = (float)$params->precio_neto;  
$precio_venta = (float)$params->precio_venta;  
$cantidad = (int)$params->cantidad; 

$ins = "INSERT INTO Productos (`nombre`, `precio_neto`, `precio_venta`, `cantidad`) 
        VALUES ('$params->nombre', $precio_neto,$precio_venta, $cantidad)";

if (!$resultado = mysqli_query($conexion, $ins)) {
    die("Error en la consulta: " . mysqli_error($conexion));
}

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
