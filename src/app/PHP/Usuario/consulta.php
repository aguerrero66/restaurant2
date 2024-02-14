<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

require("../conexion.php");

$con = "SELECT U.*, r.nombre AS fo_rol, l.nombre AS fo_localidad from Usuario U
INNER JOIN rol r ON U.fo_rol = r.id_rol INNER JOIN localidad l ON U.fo_localidad = l.id_localidad
ORDER BY U.id_usuario";

$res = mysqli_query($conexion, $con) or die("Error en la consulta de usuarios");

$vec = [];
while ($reg = mysqli_fetch_assoc($res)) {
    $vec[] = $reg;
}

$cad = json_encode($vec);
echo $cad;

?>


