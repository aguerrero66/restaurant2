    <?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    $json = file_get_contents('php://input');
    $params = json_decode($json);



    require("../conexion.php");

    

$fo_rol=$params->fo_rol;
$fo_localidad=$params->fo_localidad; 


 echo $ins = "INSERT INTO Usuario (`Nombre`, `Telefono`, `Correo`, `Direccion`, `fo_rol`, `fo_localidad`,`clave` ) 
    VALUES ('$params->Nombre', '$params->Telefono', '$params->Correo', '$params->Direccion', $fo_rol, $fo_localidad, SHA1('$params->clave'))";


        
    
mysqli_query($conexion, $ins) or die("Error en la inserción: " . mysqli_error($conexion));



class Result {}

    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'datos grabados';

    header('Content-Type: application/json');
    echo json_encode($response);
    ?>
