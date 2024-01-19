<?php

    include 'conexion.php';
    $nombre= $_POST['nombre'];
    $apellido= $_POST['apellido'];
    $email= $_POST['email'];
    $numero= $_POST ['numero'];

    $consulta= "INSERT into usuario (nombre, apellido, email, numero) values ('$nombre', '$apellido', '$email', '$numero')";
    $resulatdo= mysqli_query($conexion, $consulta);

    if($resulatdo){
        echo "Registro exitoso";
    } else{
        echo "No se pudo registrar";
    }

?>