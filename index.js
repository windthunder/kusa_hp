$(function(){
  $('#bg1').addClass('active');
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll >= 1000){
    $('#bg1').css('filter', 'blur(10px)');
    } else {
      $('#bg1').css('filter', 'blur(0px)');
    }
  });


});