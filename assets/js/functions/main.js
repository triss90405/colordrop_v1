// @codekit-prepend '../vendor/min/jquery-3.0.0-min.js'
// @codekit-prepend '../vendor/min/scrollreveal.min.js'

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


// function addFavourite() {
//   $('.sidebar__favourite--add').on('click', function(e){
//     e.preventDefault();
//     var favourite_add = $(this).val(),
//         currentButton = $(this);
//     // Returns successful data submission message when the entered information is stored in database.
//     var dataString = 'id=' + favourite_add;
//     if (favourite_add === '') {
//     } else {
//       // AJAX code to submit form.
//       $.ajax({
//         type: "POST",
//         url: "favourite_add_post.php",
//         data: dataString,
//         cache: false,
//         success: function() {
//           currentButton.addClass('active');
//           currentButton.children(':last').text('Remove');
//           currentButton.parent().parent().parent().prev().append('<svg id="favourite" baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter xmlns="http://www.w3.org/2000/svg" id="dropshadow" height="130%"><feGaussianBlur in="SourceAlpha" stdDeviation="1"/><feOffset dx="1" dy="1" result="offsetblur"/><feComponentTransfer><feFuncA type="linear" slope="0.6"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path filter="url(#dropshadow)" d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"/></svg>');
//           currentButton.addClass('sidebar__favourite--remove');
//           currentButton.removeClass('sidebar__favourite--add');
//           currentButton.removeClass('active');
//         }
//       });
//     }
//     return false;
//   });
// }

//
// function removeFavourite() {
//   $('.sidebar__favourite--remove').on('click', function(e){
//     e.preventDefault();
//     var favourite_remove = $(this).val(),
//         currentButton = $(this);
//     // Returns successful data submission message when the entered information is stored in database.
//     var dataString = 'id=' + favourite_remove;
//     if (favourite_remove === '') {
//     } else {
//       // AJAX code to submit form.
//       $.ajax({
//         type: "POST",
//         url: "favourite_delete_post.php",
//         data: dataString,
//         cache: false,
//         success: function() {
//           currentButton.removeClass('active');
//           currentButton.children(':last').text('Favourite');
//           currentButton.parent().parent().parent().prev().remove('#favourite');
//           currentButton.addClass('sidebar__favourite--add');
//           currentButton.removeClass('sidebar__favourite--remove');
//         }
//       });
//     }
//     return false;
//   });
// }


function toggleMenu() {
  var toggleButton = $('.navigation__toggle__button'),
      navigation = $('.navigation');
  toggleButton.on('click', function() {
    navigation.toggleClass('active');
  });
}

// function gridderLink() {
//   var gridderLinkBox = $('.gridder_link'),
//       gridderLinBoxRemove = $('.gridder_link_close');
//   setTimeout(function() {
//     gridderLinkBox.addClass('visible');
//   }, 25000);
//   gridderLinBoxRemove.on('click', function() {
//     gridderLinkBox.removeClass('visible');
//   });
// }

// Call fucntions
$(document).ready(function() {
  bgChangeColor();
  detailsView();
  dialog();
  cookie();
  acceptCookies();
  declineCookies();
  toggleMenu();
  // gridderLink();
  // addFavourite();
  // removeFavourite();
});
