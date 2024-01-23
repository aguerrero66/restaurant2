<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

//$json= file_get_contents ('php://input');
//$params = json_decode ($json);



require("../conexion.php");

//$ins = "INSERT INTO usuario (`Nombre`, `identificacion`, `Telefono`, `Correo`, `Direccion`, `fo_localidad`, `fo_tipo_usuario`, `clave`) 
        //VALUES ('luisa', '1234', '311', 'luisaa', 'calle11',
        //'2', '3', SHA1('1234456'))";




$ins = "INSERT INTO tipo_usuario (`Nombre`) 
        VALUES ('$params->nombre')";
mysqli_query($conexion, $ins) or die("no inserto");



class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type:application/json');
echo json_encode ($response);
?>

