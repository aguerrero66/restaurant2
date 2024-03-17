<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../conexion.php");

$con = "SELECT n.*, u.Nombre AS Usuario, r.Nombre AS rol
FROM Notificacion n
INNER JOIN Usuario u ON n.fo_Usuario= u.id_usuario
INNER JOIN rol r ON  n.fo_rol=r.id_rol
ORDER BY n.id_notificacion";
$res = mysqli_query($conexion, $con) or die("Error en la consulta de productos");

$vec = [];
while ($reg = mysqli_fetch_assoc($res)) {
    $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>
