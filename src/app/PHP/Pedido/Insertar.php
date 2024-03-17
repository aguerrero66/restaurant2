<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json);

require("../conexion.php");

        $productos = intval($params->productos);
        $total = floatval($params->total);
        $fo_Usuario = $params->fo_Usuario;
        $fecha_pedido=date('Y-m-d', strtotime($params->fecha_pedido));

    
$ins = "INSERT INTO pedido (`fecha_pedido`,`productos`, `estado_del_pedido`,`metodo_pago`, `total`,`fo_Usuario`) 
                VALUES ('$fecha_pedido',$productos, '$params->estado_del_pedido','$params->metodo_pago' ,$total, $fo_Usuario)";

mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));

class Result {}

$response = new Result();
$response->resultado = 'OK';
$response->mensaje = 'Datos grabados';

       
echo json_encode($response);
?>
