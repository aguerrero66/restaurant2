<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

$user = ($_GET['user']);
$cla= ($_GET['clave']);
$hash_cla = sha1($cla);

require("../conexion.php");


 
 $con = "SELECT * FROM usuario WHERE Correo='$user' AND clave='$hash_cla'";

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