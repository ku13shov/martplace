$(function(){

  $('.products-slider__star').rateYo({
    starWidth: "15px",
    rating: 4.5,
    readOnly: true,
    "starSvg": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">'+
                  '<path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path>'+
              '</svg>'
  });
 
  $('.products-slider__items').slick({
    dots: false,
    infinite: true,
    arrows: true,
  });

  $('.feed__items').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  new WOW().init();

  var mixer = mixitup('.products__inner');

});