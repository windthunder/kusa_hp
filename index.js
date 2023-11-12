$(window).on('load', function(){
  setTimeout(function(){
    $('.logo').addClass('aaa').removeClass('bbb');
  }, 500);

  setTimeout(function(){
    $('.logo').removeClass('aaa').addClass('bbb');
  }, 2000);

  setTimeout(function(){
    $('.door').addClass('active');
  // }, 500);
  }, 3500);

  setTimeout(function(){
    $('.obj').addClass('active');
  }, 5500);

  setTimeout(function(){
    $('.char').addClass('active');
  }, 6500);

  setTimeout(function(){
    $('#name').addClass('active');
  }, 7500);

  setTimeout(function(){
    $('.door2').addClass('active');
  }, 8500);


});

$(function(){
});