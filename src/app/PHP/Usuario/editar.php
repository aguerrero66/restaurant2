<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");



$id_usuario=intval($params->id_usuario);
$clave = password_hash($params->clave, PASSWORD_DEFAULT);


$editar ="UPDATE usuario SET nombre='$params->nombre', telefono='$params->telefono',correo='$params->correo',direccion='$params->direccion',clave='$clave' WHERE id_usuario=$id_usuario";
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
