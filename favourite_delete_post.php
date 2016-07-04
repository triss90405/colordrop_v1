<?php

$color = htmlspecialchars($_POST["id"]);

$color_ids = $_COOKIE['colors'];

$colors = str_replace(" " . $color,"", $color_ids);

setcookie("colors", $colors, time() + (86400 * 356), "/"); // 86400 = 1 day

header("Location: /favourites.php");
