<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");


$tipo_usuario=intval($params->tipo_usuario);
$fo_localidad=intval($params->fo_localidad);

//$fo_tipo_usuario=intval($params->fo_tipo_usuario);//





$ins = "INSERT INTO usuario(`Nombre`,  `Telefono`, `Correo`, `Direccion`,`clave`) 
VALUES ('$params->Nombre', '$params->Telefono', '$params->Correo', '$params->Direccion' , $sha1('$params->clave'))";

       
 
 mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));



class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type: application/json');
echo json_encode($response);
?>
