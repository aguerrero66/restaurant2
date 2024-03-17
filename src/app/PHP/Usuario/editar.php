<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



$id=$_GET ['id'];
$fo_rol=$params->fo_rol;
$fo_localidad=$params->fo_localidad; 


require("../conexion.php");





$editar ="UPDATE Usuario SET Nombre='$params->Nombre', Telefono='$params->Telefono',Correo='$params->Correo',Direccion='$params->Direccion', clave = $sha1('$params->clave'),fo_localidad = '$fo_localidad',fo_rol='$fo_rol' WHERE id_usuario=$id";
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
