<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

        $productos = intval($params->productos);
        $total = floatval($params->total);
        $usuario = intval($params->usuario);

    
        $ins = "INSERT INTO pedido (`productos`, `estado_del_pedido`, `total`) 
                VALUES ('$productos', '$params->estado_del_pedido', '$total')";

        mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));

        class Result {}

        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'Datos grabados';

        header('Content-Type: application/json');
        echo json_encode($response);
?>
