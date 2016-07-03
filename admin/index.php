<!DOCTYPE html>
<html lang="en">
<head>
   <title>ColorDrop</title>
   <meta charset="utf-8">
   <meta name="description" content="">
   <meta name="author" content="">
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

  <div class="admin">

    <div class="admin__header">
      <a href="/" class="admin__logo">
        <svg width="83px" height="99px" viewBox="0 0 83 99" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Logo" transform="translate(-196.000000, -102.000000)">
              <g id="Logo-Copy-3" transform="translate(196.000000, 102.000000)">
                <path d="M49.0164969,38.4232565 C49.6568131,40.6075989 50,42.9166158 50,45.304811 C50,58.9435873 38.8071187,70 25,70 C11.1928813,70 0,58.9435873 0,45.304811 C0,40.7895384 1.22675835,36.5572972 3.36899999,32.9155672 C3.67075751,32.3227716 3.99854523,31.728926 4.35413218,31.1431765 C9.74431131,22.264069 23.6122265,0 25.7038975,0 C27.7955685,0 40.9787699,22.1012804 46.167141,31.1431765 C47.5732834,33.5936939 48.4676354,36.2903528 49.0164969,38.4232565 Z" id="drop_3" fill="#2980D9"></path>
                <path d="M58.0164969,67.4232565 C58.6568131,69.6075989 59,71.9166158 59,74.304811 C59,87.9435873 47.8071187,99 34,99 C20.1928813,99 9,87.9435873 9,74.304811 C9,69.7895384 10.2267583,65.5572972 12.369,61.9155672 C12.6707575,61.3227716 12.9985452,60.728926 13.3541322,60.1431765 C18.7443113,51.264069 32.6122265,29 34.7038975,29 C36.7955685,29 49.9787699,51.1012804 55.167141,60.1431765 C56.5732834,62.5936939 57.4676354,65.2903528 58.0164969,67.4232565 Z" id="drop_2" fill="#F1C40F"></path>
                <path d="M82.0164969,47.4232565 C82.6568131,49.6075989 83,51.9166158 83,54.304811 C83,67.9435873 71.8071187,79 58,79 C44.1928813,79 33,67.9435873 33,54.304811 C33,49.7895384 34.2267583,45.5572972 36.369,41.9155672 C36.6707575,41.3227716 36.9985452,40.728926 37.3541322,40.1431765 C42.7443113,31.264069 56.6122265,9 58.7038975,9 C60.7955685,9 73.9787699,31.1012804 79.167141,40.1431765 C80.5732834,42.5936939 81.4676354,45.2903528 82.0164969,47.4232565 Z" id="drop_1" fill="#E74C3C"></path>
              </g>
            </g>
          </g>
        </svg>
      </a><br>
      <a href="/" class="admin__title">ColorDrop<span>.io</span></a>
    </div>

    <hr>

    <form class="new_color" action="addColorsPost.php" method="post">
      <input type="text" name="color1" value="" placeholder="FFFFFF" maxlength="6" required>
      <input type="text" name="color2" value="" placeholder="3F2F2F" maxlength="6" required>
      <input type="text" name="color3" value="" placeholder="FF0000" maxlength="6" required>
      <input type="text" name="color4" value="" placeholder="F06D06" maxlength="6" required>
      <button type="submit" name="submit">Add Colors</button>
    </form>


  </div>

</body>
</html>
