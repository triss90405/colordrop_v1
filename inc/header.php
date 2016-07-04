<!DOCTYPE html>
<html lang="en">
<head>
   <title>ColorDrop</title>
   <meta charset="utf-8">
   <meta name="description" content="The last color palette you'll ever need!">
   <meta name="author" content="Tristan White">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="/assets/css/main.css">
   <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/apple-touch-icon-57x57.png">
   <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/apple-touch-icon-60x60.png">
   <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/apple-touch-icon-72x72.png">
   <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/apple-touch-icon-76x76.png">
   <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/apple-touch-icon-114x114.png">
   <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/apple-touch-icon-120x120.png">
   <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/apple-touch-icon-144x144.png">
   <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/apple-touch-icon-152x152.png">
   <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon-180x180.png">
   <link rel="icon" type="image/png" href="/assets/img/favicon-32x32.png" sizes="32x32">
   <link rel="icon" type="image/png" href="/assets/img/android-chrome-192x192.png" sizes="192x192">
   <link rel="icon" type="image/png" href="/assets/img/favicon-96x96.png" sizes="96x96">
   <link rel="icon" type="image/png" href="/assets/img/favicon-16x16.png" sizes="16x16">
   <link rel="manifest" href="/assets/img/manifest.json">
   <link rel="mask-icon" href="/assets/img/safari-pinned-tab.svg" color="#5bbad5">
   <meta name="msapplication-TileColor" content="#da532c">
   <meta name="msapplication-TileImage" content="/mstile-144x144.png">
   <meta name="theme-color" content="#ffffff">
</head>
<body>

<?php

if ($_COOKIE['cookie_status'] != "1") {
  ?>
  <div class="cookie">
    <p class="cookie__message">We use cookies to save your favourite color palettes. We store no personal details.</p>
    <form class="cookie_form">
      <button type="submit" class="cookie__accept" name="cookie_status" id="cookie_status_accept" value="1">Accept cookies</button>
    </form>
    <form class="cookie_form">
      <button type="submit" class="cookie__decline" name="cookie_status" id="cookie_status_decline" value="0">Decline cookies</button>
    </form>
    <a class="cookie__link" href="http://www.allaboutcookies.org/" title="Learn all about cookies and why sites use them" target="_blank">What are cookies?</a>
  </div>
  <?php
}
?>
