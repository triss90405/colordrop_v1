<?php

$cookie = htmlspecialchars($_POST["cookieStatus1"]);

// unset cookies
setcookie("cookie_status", $cookie, time() + (86400 * 356), "/");

setcookie("colors", "", time() + (86400 * 356), "/"); 


// 86400 = 1 day
