<?php
    session_start();

    $paraula = $_SESSION["paraula"];
    $lletra_GET =  $_GET["lletra"];
    $ultimaPos = 0;
    $positions = array();

    while (($ultimaPos = strpos($paraula, $lletra_GET, $ultimaPos))!== false) {
        $positions[] = $ultimaPos;
        $ultimaPos = $ultimaPos + strlen($lletra_GET);
    }

    echo json_encode(array('paraula'=>$paraula,'posicions'=>$positions,));


?>