<?php 
    session_start();

    $_SESSION["paraules"] = array("pulpo","pescado","antorcha","gta","fifa","trompeta");
    $paraules = $_SESSION["paraules"];
    $random = array_rand($paraules);

    $_SESSION["paraula"] = json_encode($paraules[$random]);

    $resposta =$_SESSION["paraula"];

    echo ($resposta);