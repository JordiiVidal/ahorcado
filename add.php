<?php
    session_start();

    $paraules = $_SESSION["paraules"];
    $paraula_GET =  $_GET["paraula"];
    array_push($paraules,$paraula_GET);
    $_SESSION["paraules"] = $paraules;

    echo json_encode($paraules);

?>