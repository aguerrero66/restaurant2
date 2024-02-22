<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$json= file_get_contents ('php://input');
$params = json_decode ($json);



require("../conexion.php");



//$ins = "INSERT INTO usuario (`Nombre`, `identificacion`, `Telefono`, `Correo`, `Direccion`, `fo_localidad`, `fo_tipo_usuario`, `clave`) 
        //VALUES ('luisa', '1234', '311', 'luisaa', 'calle11',
        //'2', '3', SHA1('1234456'))";


$fecha_compra = date('Y-m-d', strtotime($params->fecha_venta));
$productos_comprados = intval($params->productos_comprados);
$total_compra= intval($params->total_compra);
$id_productos=intval($params->id_productos);


$ins = "INSERT INTO compra(`fecha_compra`, `productos_comprados`,`Materia_prima`,`total_compra`,`metodo_pago` ,`Empresa`)
        VALUES ('$fecha_compra','$productos_comprados','$params->Materia_prima','$total_compra','$params->metodo_pago', '$params->Empresa')";

if (!$resultado = mysqli_query($conexion, $ins)) {
    die("Error en la consulta: " . mysqli_error($conexion));
};




class Result {}

$response = new Result ();
$response->resultado = 'OK';
$response->mensaje = 'datos grabados';

header('Content-Type:application/json');
echo json_encode ($response);
?>