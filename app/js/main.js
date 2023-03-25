$(document).ready(function () {
  $('.result__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    
    centerPadding: '150px',
    dotsClass: 'result__slider-dots'
  });
});

$(document).ready(function () {
  $('.roof__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '10px',
    dotsClass: 'proof__slider-dots'
  });
});