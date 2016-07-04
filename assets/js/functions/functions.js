// Change background color
function bgChangeColor() {
  var content = $('body'),
      blue = $('.bg__color.blue'),
      red = $('.bg__color.red'),
      yellow = $('.bg__color.yellow'),
      light = $('.bg__color.light'),
      dark = $('.bg__color.dark'),
      gradientPink = $('.bg__color.gradient--pink'),
      gradientGreen = $('.bg__color.gradient--green'),
      gradientBlue = $('.bg__color.gradient--blue'),
      gradientYellow = $('.bg__color.gradient--yellow'),
      gradientGrey = $('.bg__color.gradient--grey');
  blue.on('click', function(){
    content.css('background-color', '#2980D9');
  });
  red.on('click', function(){
    content.css('background-color', '#E74C3C');
  });
  yellow.on('click', function(){
    content.css('background-color', '#F1C40F');
  });
  light.on('click', function(){
    content.css('background-color', '#F7F7F7');
  });
  dark.on('click', function(){
    content.css('background-color', '#433F3F');
  });
  gradientPink.on('click', function(){
    content.css('background', 'rgba(250,165,165,1)',
                'background', '-moz-linear-gradient(45deg, rgba(250,165,165,1) 0%, rgba(133,127,226,1) 100%)',
                'background', '-webkit-gradient(left bottom, right top, color-stop(0%, rgba(250,165,165,1)), color-stop(100%, rgba(133,127,226,1)))',
                'background', '-webkit-linear-gradient(45deg, rgba(250,165,165,1) 0%, rgba(133,127,226,1) 100%)',
                'background', '-o-linear-gradient(45deg, rgba(250,165,165,1) 0%, rgba(133,127,226,1) 100%)',
                'background', '-ms-linear-gradient(45deg, rgba(250,165,165,1) 0%, rgba(133,127,226,1) 100%)',
                'background', 'linear-gradient(45deg, rgba(250,165,165,1) 0%, rgba(133,127,226,1) 100%)',
                'filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#faa5a5", endColorstr="#857fe2", GradientType=1)');
  });
  gradientGreen.on('click', function(){
    content.css('background', 'rgba(0,135,68,1)',
                'background', '-moz-linear-gradient(45deg, rgba(0,135,68,1) 0%, rgba(31,59,8,1) 100%)',
                'background', '-webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,135,68,1)), color-stop(100%, rgba(31,59,8,1)))',
                'background', '-webkit-linear-gradient(45deg, rgba(0,135,68,1) 0%, rgba(31,59,8,1) 100%)',
                'background', '-o-linear-gradient(45deg, rgba(0,135,68,1) 0%, rgba(31,59,8,1) 100%)',
                'background', '-ms-linear-gradient(45deg, rgba(0,135,68,1) 0%, rgba(31,59,8,1) 100%)',
                'background', 'linear-gradient(45deg, rgba(0,135,68,1) 0%, rgba(31,59,8,1) 100%)',
                'filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#008744", endColorstr="#1f3b08", GradientType=1 )');
  });
  gradientBlue.on('click', function(){
    content.css('background', 'rgba(147,206,222,1)',
                'background', '-moz-linear-gradient(45deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%)',
                'background', '-webkit-gradient(left bottom, right top, color-stop(0%, rgba(147,206,222,1)), color-stop(41%, rgba(117,189,209,1)), color-stop(100%, rgba(73,165,191,1)))',
                'background', '-webkit-linear-gradient(45deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%)',
                'background', '-o-linear-gradient(45deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%)',
                'background', '-ms-linear-gradient(45deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%)',
                'background', 'linear-gradient(45deg, rgba(147,206,222,1) 0%, rgba(117,189,209,1) 41%, rgba(73,165,191,1) 100%)',
                'filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#93cede", endColorstr="#49a5bf", GradientType=1)');
  });
  gradientYellow.on('click', function(){
    content.css('background', 'rgba(241,231,103,1)',
                'background', '-moz-linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%)',
                'background', '-webkit-gradient(left bottom, right top, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(254,182,69,1)))',
                'background', '-webkit-linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%)',
                'background', '-o-linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%)',
                'background', '-ms-linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%)',
                'background', 'linear-gradient(45deg, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%)',
                'filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#f1e767", endColorstr="#feb645", GradientType=1 )');
  });
  gradientGrey.on('click', function(){
    content.css('background', 'rgba(219,219,219,1)',
                'background', '-moz-linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 44%, rgba(254,254,254,1) 100%)',
                'background', '-webkit-gradient(left bottom, right top, color-stop(0%, rgba(219,219,219,1)), color-stop(44%, rgba(226,226,226,1)), color-stop(100%, rgba(254,254,254,1)))',
                'background', '-webkit-linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 44%, rgba(254,254,254,1) 100%)',
                'background', '-o-linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 44%, rgba(254,254,254,1) 100%)',
                'background', '-ms-linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 44%, rgba(254,254,254,1) 100%)',
                'background', 'linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 44%, rgba(254,254,254,1) 100%)',
                'filter', 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#dbdbdb", endColorstr="#fefefe", GradientType=1 )');
  });
}


function detailsView() {
  var palette = $('.palette'),
      paletteDetails = $('.palette__details'),
      content = $('.content'),
      closeButton = $('.sidebar__close'),
      cookieAlert = $('.cookie');
  palette.on('click', function(){
    paletteDetails.removeClass('active');
    content.addClass('menu--active');
    cookieAlert.addClass('menu--active');
    $(this).next(paletteDetails).toggleClass('active');
  });
  closeButton.on('click', function() {
    paletteDetails.removeClass('active');
    content.removeClass('menu--active');
    cookieAlert.removeClass('menu--active');
  });
}


function dialog() {

  var dialogBox = $('.dialog'),
      dialogTrigger = $('.dialog__trigger'),
      dialogClose = $('.dialog__close'),
      dialogTitle = $('.dialog__title'),
      dialogContent = $('.dialog__content'),
      dialogAction = $('.dialog__action');

  // Open the dialog
  dialogTrigger.on('click', function(e) {
    dialogBox.toggleClass('dialog--active');
    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('dialog--active');
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
    }
  });

  // Close dialog - click outside
  $(document).on("click", function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass("dialog--active");
    }
  });

}


function cookie() {

  var cookieAcceptButton = $('.cookie__accept'),
      cookieDeclineButton = $('.cookie__decline'),
      cookieAlert = $('.cookie');

  cookieAcceptButton.on('click', function() {
    cookieAlert.fadeOut('slow');
  });

  cookieDeclineButton.on('click', function() {
    cookieAlert.fadeOut('slow');
  });

}



function acceptCookies() {
  $('#cookie_status_accept').on('click', function(e){

    e.preventDefault();
    var cookie_status = document.getElementById("cookie_status_accept").value;
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'cookieStatus1=' + cookie_status;
    if (cookie_status === '') {
    } else {
      // AJAX code to submit form.
      $.ajax({
        type: "POST",
        url: "cookies_accept_post.php",
        data: dataString,
        cache: false,
        success: function() {
        }
      });
    }
    return false;
  });
}

function declineCookies() {
  $('#cookie_status_decline').on('click', function(e){

    e.preventDefault();
    var cookie_status = document.getElementById("cookie_status_decline").value;
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'cookieStatus1=' + cookie_status;
    if (cookie_status === '') {
    } else {
      // AJAX code to submit form.
      $.ajax({
        type: "POST",
        url: "cookies_decline_post.php",
        data: dataString,
        cache: false,
        success: function() {
        }
      });
    }
    return false;
  });
}


// Call fucntions
$(document).ready(function() {
  bgChangeColor();
  detailsView();
  dialog();
  cookie();
  acceptCookies();
  declineCookies();
});
