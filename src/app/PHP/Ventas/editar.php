<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");



$id=$_GET['id'];
$fecha_venta = date('Y-m-d', strtotime($params->fecha_venta));
$productos_vendidos = intval($params->productos_vendidos);
$total_ventas= intval($params->total_vendidos);
$id_ventas=intval($params->id_ventas);


$editar ="UPDATE ventas SET fecha_venta='$fecha_venta', productos_vendidos=$productos_vendidos,fo_productos=$params->fo_productos,total_ventas=$total_ventas WHERE id_ventas=$id";
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
