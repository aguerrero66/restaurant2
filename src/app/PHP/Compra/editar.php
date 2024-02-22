<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");




$id=$_GET ['id'];
$fecha_compra = date('Y-m-d', strtotime($params->fecha_compra));
$productos_comprados = intval($params->productos_comprados);
$total_compra= intval($params->total_compra);



$editar ="UPDATE compra SET fecha_compra='$fecha_compra', productos_comprados='$productos_comprados', Materia_prima='$params->Materia_prima',total_compra='$total_compra',metodo_pago='$params->metodo_pago',Empresa='$params->Empresa' WHERE id_compra=$id";
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
