<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../conexion.php");

$con = "SELECT * FROM Ventas ORDER BY id_ventas";
$res = mysqli_query($conexion,$con) or die("Error en la consulta de productos");

$vec = [];
while ($reg = mysqli_fetch_array($res)) {
    $vec[] = $reg;
}
$cad = json_encode($vec);
header('Content-Type: application/json');
echo $cad;

?>
