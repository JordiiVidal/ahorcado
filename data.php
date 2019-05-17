<?php 
session_start();

$paraules = array(
    "pulpo","pescado"
);
$random = array_rand($paraules);
$_SESSION["paraula"] = json_encode($paraules[$random]);

$resposta =$_SESSION["paraula"];

echo ($resposta);