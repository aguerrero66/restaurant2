<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);


$id=$_GET ['id'];
$fo_Usuario=$params->fo_Usuario;
$fo_rol=$params->fo_rol;


require("../conexion.php");





$editar ="UPDATE Notificacion SET tipo_notificacion='$params->tipo_notificacion', mensaje='$params->mensaje', fo_Usuario=$fo_Usuario, fo_rol=$fo_rol WHERE id_notificacion='$id'";
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
