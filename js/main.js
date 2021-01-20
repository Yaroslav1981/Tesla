$(function(){

    $(".menu-btn").on('click', function(){
        $(".menu").addClass('active');
        //$("header").removeClass('subtext-passive');
      })
      $(".menu-btn__exit").on('click', function(){
        $(".menu").removeClass('active');
       
      })

      $('.header-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        fade: true,
        infinite: true,      
        dots: true,
        arrows:false,
      });

      
});