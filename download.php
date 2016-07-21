<?php

  $file = time() ."_colors.txt";
  $colors = rtrim($_GET["colors"],',');
  $colors = explode(",", $colors);

  header("Content-type: text/plain");
  header("Content-Disposition: attachment; filename=$file");
  //header("Location: /");

  $i = 1;

  foreach($colors as $color) {
    list($r, $g, $b) = sscanf($color, "%02x%02x%02x");
    $rgb = "$r $g $b";
    $file_contents .= "Color" . $i++ . "\r\nHEX: " . $color . "\r\nRGB: " . $rgb . " \r\n\r\n";
  }

  print $file_contents;
