<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$nombre= ($_GET['nombre']);


require("../conexion.php");


 
 //$con = "SELECT * FROM usuario WHERE Nombre='$nombre'";

 $con = "SELECT U.*, r.nombre AS nombre_rol, l.nombre AS nombre_localidad
        FROM usuario U
        INNER JOIN rol r ON U.fo_rol = r.id_rol
        INNER JOIN localidad l ON U.fo_localidad = l.id_localidad
        WHERE U.Nombre='$nombre'";


 $res = mysqli_query($conexion, $con) or die('Error en la consulta de usuarios');

 $vec = mysqli_fetch_assoc($res);


while ($reg = mysqli_fetch_array($res)) {
    $vec[] = $reg;
}


if ($vec==[]) {
    $vec[1] = array("validar"=>"no valida");

} else {
    $vec[0] ['validar']="valida";
}


$cad = json_encode($vec);
echo $cad;


?>