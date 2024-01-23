<?php
$servidor  = "localhost";
$usuario = "root";
$clave = "";
$bd = "Buguer_Middle_Earth";

$conexion = mysqli_connect($servidor,$usuario, $clave, $bd) or die("No se pudo conectar a MySQL: ");
mysqli_select_db($conexion, $bd) or die("No se encontró la base de datos: " );
?>