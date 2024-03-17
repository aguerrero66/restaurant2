<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

      
 $fo_Usuario = $params->fo_Usuario;
 $fo_rol = $params->fo_rol;


    
        $ins = "INSERT INTO Notificacion( `tipo_notificacion`, `mensaje`, fo_Usuario, fo_rol) 
        VALUES ('$params->tipo_notificacion','$params->mensaje', $fo_Usuario, $fo_rol)";

        mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));

        class Result {}

        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'Datos grabados';

        header('Content-Type: application/json');
        echo json_encode($response);
?>
