    <footer>

    <!-- <div class="gridder_link">
      <svg enable-background="new 0 0 32 32" height="32px" class="gridder_link_close" id="close" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="#121313" id="Close"></path>
      </svg>
      <p>Have you tried <a href="https://gridder.io" target="_blank">gridder.io</a>?<br>
      It's a css flexbox grid </p>
    </div> -->


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

    <script src="/assets/js/functions/min/main-min.js"></script>

    <script>
    // Changing the defaults
    window.sr = ScrollReveal({ reset: true });

    // Customizing a reveal set
    sr.reveal('.palette', { duration: 200 });
    </script>

    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-62496570-3', 'auto');
    ga('send', 'pageview');
    </script>
    </footer><!-- end .navigation -->

  </body>
</html>
