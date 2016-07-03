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
      content = $('.content');
  palette.on('click', function(){
    paletteDetails.removeClass('active');
    content.addClass('menu--active');
    $(this).next(paletteDetails).toggleClass('active');
  });
}


// Call fucntions
$(document).ready(function() {
  bgChangeColor();
  detailsView();
});
