<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type:application/json');
$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");




$id=$_GET ['id'];
$fo_Usuario=$params->fo_Usuario;
$fecha_pedido=date('Y-m-d', strtotime($params->fecha_pedido));
$total= intval($params->total);
$productos= intval($params->productos);


 $editar ="UPDATE pedido SET fecha_pedido='$fecha_pedido', productos=$productos, estado_del_pedido='$params->estado_del_pedido', metodo_pago='$params->metodo_pago' , total=$total , fo_Usuario = $fo_Usuario WHERE id_pedido=$id";
if (!$resultado = mysqli_query($conexion, $editar)) {
    die("Error en la consulta: " . mysqli_error($conexion));
};




class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'datos modificados';


echo json_encode ($response);
?>
