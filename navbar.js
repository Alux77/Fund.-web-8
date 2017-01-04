// var divs = $('.top-nav'),
//     limit = 35;  /* scrolltop value when opacity should be 0 */

// $(window).on('scroll', function() {
//    var st = $(this).scrollTop();

//    /* avoid unnecessary call to jQuery function */
//    if (st <= limit) {
//       divs.css({ 'opacity' : (1 - st/limit) });
//    }
// });

$(function() {
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0)
      $('nav').stop().animate({'opacity':'0.5'},400);
    else  
      $('nav').stop().animate({'opacity':'1'},400);
  });
  
  $('nav').hover(
    function (e) {
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
        $('nav').stop().animate({'opacity':'1'},400);
      }
    },
    function (e) {
      var scrollTop = $(window).scrollTop();
      if(scrollTop != 0){
        $('nav').stop().animate({'opacity':'0.5'},400);
      }
    }
  );
});