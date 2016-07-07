<?php

$color = htmlspecialchars($_POST["id"]);

if (!isset($_COOKIE["colors"])) {
  setcookie("colors", " " . $color, time() + (86400 * 356), "/"); // 86400 = 1 day
} else {
  $colors = $_COOKIE["colors"] ." ". $color;
  setcookie("colors", $colors, time() + (86400 * 356), "/"); // 86400 = 1 day
}

if (isset($_SERVER["HTTP_REFERER"])) {
  header("Location: " . $_SERVER["HTTP_REFERER"]);
}
