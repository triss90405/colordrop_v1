// Change background color
function bgChangeColor() {
  var content = $('.content'),
      blue = $('.bg__color.blue'),
      red = $('.bg__color.red'),
      yellow = $('.bg__color.yellow'),
      light = $('.bg__color.light'),
      dark = $('.bg__color.dark');

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
}


// Call fucntions
$(document).ready(function() {
  bgChangeColor();
});
