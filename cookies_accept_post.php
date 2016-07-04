<?php

$cookie = htmlspecialchars($_POST["cookieStatus1"]);

if ($_COOKIE["cookie_status"] == "0" || !isset($_COOKIE["cookie_status"])) {
  setcookie("cookie_status", $cookie, time() + (86400 * 356), "/"); // 86400 = 1 day
}
