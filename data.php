<?php 
session_start();

$paraules = array("pulpo","pescado","antorcha","gta","fifa","trompeta");
$random = array_rand($paraules);

$_SESSION["paraula"] = json_encode($paraules[$random]);

$resposta =$_SESSION["paraula"];

echo ($resposta);