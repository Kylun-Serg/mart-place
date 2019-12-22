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

  $('.feedback__slider-inner').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
  });

    $('.blog-slider__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
  });
  

  /*MENU*/

$('html').click( function(e) {

    if( $(e.target).closest('.notification').length===0 && $(e.target).closest(".notification__menu").length===0) {
  $('.notification__menu').slideUp(200);
  }
    if( $(e.target).closest('.message').length===0 && $(e.target).closest(".message__menu").length===0) {
  $('.message__menu').slideUp(200);
  }
    if( $(e.target).closest('.basket').length===0 && $(e.target).closest(".basket__menu").length===0) {
  $('.basket__menu').slideUp(200);
  }
    if( $(e.target).closest('.user').length===0 && $(e.target).closest(".user__menu").length===0) {
    $('.user__menu').slideUp(200);
  }
});



$('.header__user-nav').click(function(e) {

  if( $(e.target).hasClass("notification")) {
    if( $(e.target).closest('.notification__menu').length===0) {
      $('.notification__menu').slideToggle(200);
    }

  }else if( $(e.target).hasClass("message")){
    if( $(e.target).closest('.message__menu').length===0) {
      $('.message__menu').slideToggle(200);
    }

  }else if( $(e.target).hasClass("basket")){
    if( $(e.target).closest('.basket__menu').length===0) {
      $('.basket__menu').slideToggle(200);
    }
  }
});

$('.user').click(function() {
  $('.user__menu').slideToggle(200);
});

$(".link__mega-menu, .drop-down__mega-menu").hover(function() {
      $(".drop-down__mega-menu").show();
    }, function() {
      $(".drop-down__mega-menu").hide();     
});

$('.menu__header-btn').on('click', function(){
  $('.menu__header-list').slideToggle();
});

$('.drop__down-menu').on('click', function(){
  $(this).children('.drop__down-list').toggleClass('active');
});




// var mixer = mixitup('.new-products__inner-box');  




  /*MENU*/


  // $('.notification').click(function(e) {
  // if( $(e.target).closest('.notification__menu').length===0) {
  // $('.notification__menu').slideToggle(200);
  // }
  // });

  //  $('html').click( function(e) {
  //   if( $(e.target).closest('.notification').length===0 && $(e.target).closest(".notification__menu").length===0) {
  //     $('.notification__menu').slideUp(200);
  //   }
  // });


  //   $('.message').click(function(e) {
  // if( $(e.target).closest('.message__menu').length===0) {
  // $('.message__menu').slideToggle(200);
  // }
  // });

  //  $('html').click( function(e) {
  //   if( $(e.target).closest('.message').length===0 && $(e.target).closest(".message__menu").length===0) {
  //     $('.message__menu').slideUp(200);
  //   }
  // });


  // $('.basket').click(function(e) {
  // if( $(e.target).closest('.basket__menu').length===0) {
  // $('.basket__menu').slideToggle(200);
  // }
  // });

  //  $('html').click( function(e) {
  //   if( $(e.target).closest('.basket').length===0 && $(e.target).closest(".basket__menu").length===0) {
  //     $('.basket__menu').slideUp(200);
  //   }
  // });


  // $('.user').click(function() {
  //   $('.user__menu').slideToggle(200);
  // });

  // $('html').click( function(e) {
  //   if( $(e.target).closest('.user').length===0 && $(e.target).closest(".user__menu").length===0) {
  //     $('.user__menu').slideUp(200);
  //   }
  // });


  // $(".link__mega-menu, .drop-down__mega-menu").hover(function() {
  //     $(".drop-down__mega-menu").show();
  //   }, function() {
  //     $(".drop-down__mega-menu").hide();     
  // });

  // var mixer = mixitup('.new-products__inner-box');




   });