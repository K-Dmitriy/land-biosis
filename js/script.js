$(document).ready(function(){
  function mobileCompositionSlider() {
    $('.composition .slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false
    });
  }
  if (window.innerWidth < 768) {
    mobileCompositionSlider();
  }
  $(window).resize(function(e){
    if (window.innerWidth < 768) {
      if (!$('.composition .slider').hasClass('slick-initialized')) {
        mobileCompositionSlider();
      }
    } else {
      if ($('.composition .slider').hasClass('slick-initialized')) {
        $('.composition .slider').slick('unslick');
      }
    }
  });
  $('.test-results__slider').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 3,
          variableWidth: true,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
    ]
  })
  $('.comments__slider').slick({
    dots: false
  });
    $('a').click(function (evt) {
      evt.preventDefault();
      $('html, body').stop().animate({ scrollTop: ($('#order_form').offset().top) }, 1500);
    });
    
    
});


