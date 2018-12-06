$(document).ready(function(){

  $('.owl-carousel_project').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    slideTransition:'ease',
    responsiveClass:true,
    nav:false,
    responsive:{
      0:{
        items:1,
        dots: true
      },
      576:{
        items:2,
        dots: true
      },
      992:{
        items:3,
        dots: true
      },
      1400:{
        items:4,
        dots: true
      },
      1800:{
        items:4,
      }
    }
  })

  $('.c_wrap').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    nav: true,
    navText: [],
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        dots: true
      },
      768:{
        items:3,
        dots: true
      },
      1400:{
        items:5,
      }
    }
  });

  $('.modalFormPrice').on('show.bs.modal', function (e) {
    $('.modalFormPage').modal('hide');
  })

  var flag = true;
  $('.dot-jakor-another').hover(function() {
   if(flag){
     $('.dot-jakor-first span').css('display', 'none');
     $('.dot-jakor-first').css('border-color', '#fff');
     $('.dot-jakor-first').css('background-color', 'transparent');
     flag = !flag;
   }
   else{
    $('.dot-jakor-first span').css('display', 'block');
    $('.dot-jakor-first').css('border-color', '#ff5000');
    $('.dot-jakor-first').css('background-color', '#ff5000');
    flag = !flag;
  }   
})

  wow = new WOW(
  {
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
    }
    )
  wow.init();

  $("a.dot-jakor").click(function() {
    $("html, body").animate({
     scrollTop: $($(this).attr("href")).offset().top + "px"
   }, {
     duration: 500,
     easing: "swing"
   });
    return false;
  });

  $("a.btn-jakor").click(function() {
    $("html, body").animate({
     scrollTop: $($(this).attr("href")).offset().top + "px"
   }, {
     duration: 500,
     easing: "swing"
   });
    return false;
  });

$(".modal").on("show.bs.modal", function(){
    var $bodyWidth = $("body").width();
    $("body").css({'overflow-y': "hidden"}).css({'padding-right': ($("body").width()-$bodyWidth)});
});

$(".modal").on("hidden.bs.modal", function(){
    $("body").css({'padding-right': "0", 'overflow-y': "auto"});
});


});

