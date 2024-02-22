<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("../conexion.php");

$con = "SELECT V.*, p.nombre AS fo_productos FROM Ventas V
INNER JOIN Productos p ON V.fo_productos =p.id_productos
ORDER BY id_ventas";
$res = mysqli_query($conexion,$con) or die("Error en la consulta de productos");

$vec = [];
while ($reg = mysqli_fetch_array($res)) {
    $vec[] = $reg;
}
$cad = json_encode($vec);

echo $cad;

?>
