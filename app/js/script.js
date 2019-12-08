$(function(){
	
	$('select').styler();

	$(".features-slider__item-footer-star").rateYo({
    	rating: 4.5,
    	starWidth: "17px",
    	normalFill: "#f6e4ac",
    	ratedFill: "#ffc000",
  });

    $(".product__item-star").rateYo({
      rating: 4.8,
      starWidth: "17px",
      normalFill: "#f6e4ac",
      ratedFill: "#ffc000",
  });

	$('.features-slider__inner').slick({
		dots: false,
  		infinite: true,
  		speed: 800,
  		slidesToShow: 1,
  		nextArrow: '<button class="slick-arrow slick-next"><img src="../images/features-slider-item/arrow-right.svg" alt=""></button>',
  		prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/features-slider-item/arrow-left.svg" alt=""></button>',
	});

    $('.followers-feed__inner-slider').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      
      nextArrow: '<button class="slick-arrow slick-next"><img src="../images/features-slider-item/arrow-right.svg" alt=""></button>',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/features-slider-item/arrow-left.svg" alt=""></button>',
  });

  var mixer = mixitup('.new-products__inner-box');

});