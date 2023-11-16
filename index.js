$(window).on('load', function() {
  setTimeout(function(){
    $('#main_logo').addClass('aaa').removeClass('bbb');
  }, 500);

  setTimeout(function(){
    $('#main_logo').removeClass('aaa').addClass('bbb');
  }, 2200);

  setTimeout(function(){
    $('#obj').addClass('active');
  }, 3700);

  setTimeout(function(){
    $('#char').addClass('active');
  }, 4700);

  setTimeout(function(){
    $('.name').addClass('active');
  }, 5700);

  setTimeout(function(){
    $('#page2').addClass('active');
    $('#page2_wrapper').addClass('active');
  }, 7000);

});