<?php

$color1 = htmlspecialchars($_POST["color1"]);
$color2 = htmlspecialchars($_POST["color2"]);
$color3 = htmlspecialchars($_POST["color3"]);
$color4 = htmlspecialchars($_POST["color4"]);

$hex = $color1 ." ". $color2 ." ". $color3 ." ". $color4;

$date = date("Y-m-d");

$db = new PDO("sqlite:../colors.db");

$qry = $db->prepare(
    "INSERT INTO colors (hex, created, updated) VALUES (?, ?, ?)");
$qry->execute(array($hex, $date, $date));

$newURL = "/faYfe2PCsQGvRfaeIyjs/index.php";
header('Location: '.$newURL);
