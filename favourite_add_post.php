<?php

$color = htmlspecialchars($_POST["id"]);

if (!isset($_COOKIE["colors"])) {
  setcookie("colors", " " . $color, time() + (86400 * 356), "/"); // 86400 = 1 day
} else {
  $colors = $_COOKIE["colors"] ." ". $color;
  setcookie("colors", $colors, time() + (86400 * 356), "/"); // 86400 = 1 day
}

header("Location: /favourites.php");
