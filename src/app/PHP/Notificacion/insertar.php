<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

      
 $id_usuario = intval($params->id_usuario);

    
        $ins = "INSERT INTO Notificacion( `tipo_notificacion`, `mensaje`) 
        VALUES ('$params->tipo_notificacion','$params->mensaje')";

        mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));

        class Result {}

        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'Datos grabados';

        header('Content-Type: application/json');
        echo json_encode($response);
?>
