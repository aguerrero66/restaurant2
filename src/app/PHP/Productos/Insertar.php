<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

$precio_neto = (float)$params->precio_neto;  
$fecha_productos = date('Y-m-d', strtotime($params->fecha_productos));

$precio_venta = (float)$params->precio_venta;  
$cantidad = (int)$params->cantidad; 

$ins = "INSERT INTO Productos (`nombre`,fecha_productos, `precio_neto`, `precio_venta`, `cantidad`) 
        VALUES ('$params->nombre','$fecha_productos' , $precio_neto,$precio_venta, $cantidad)";

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
