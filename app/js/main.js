$(document).ready(function () {
  $('.result__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,    
    centerPadding: '1px',
    dotsClass: 'result__slider-dots',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.08,
          slidesToScroll: 1,
          dots: true,
          centerPadding: '10px',
        }
      }
    ]
  });  
});

$(document).ready(function () {
  $('.roof__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true, 
    centerPadding: '10px',
    dotsClass: 'proof__slider-dots',
     responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.08,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
});