<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../conexion.php");

$id=$_GET ['id'];

$con = "SELECT p.*, u.Nombre AS Usuario
FROM pedido p
INNER JOIN Usuario u ON p.fo_Usuario= u.id_usuario
WHERE u.id_usuario='$id'";
$res = mysqli_query($conexion, $con) or die("Error en la consulta de productos");

$vec = [];
while ($reg = mysqli_fetch_assoc($res)) {
    $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
