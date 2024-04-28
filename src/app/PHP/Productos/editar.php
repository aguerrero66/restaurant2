<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");




$id=$_GET ['id'];
$fecha_productos = date('Y-m-d', strtotime($params->fecha_productos));
$precio_neto = (float)$params->precio_neto;  
$precio_venta = (float)$params->precio_venta;  
$cantidad = (int)$params->cantidad; 


$editar ="UPDATE Productos SET nombre='$params->nombre',fecha_productos='$fecha_productos',precio_venta=$precio_venta,precio_neto=$precio_neto, cantidad=$cantidad WHERE id_productos=$id";
if (!$resultado = mysqli_query($conexion, $editar)) {
    die("Error en la consulta: " . mysqli_error($conexion));
};




class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';

header('Content-Type:application/json');
echo json_encode ($response);
?>
