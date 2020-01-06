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
      spacing: "2px",
      
  });

    $(".single-product__aside-rating").rateYo({
      rating: 4.8,
      starWidth: "17px",
      normalFill: "#f6e4ac",
      ratedFill: "#ffc000",
      spacing: "2px",
  });

    

	$('.features-slider__inner').slick({
		dots: false,
  		infinite: true,
  		speed: 800,
  		slidesToShow: 1,
  		nextArrow: '<button class="slick-arrow slick-next"><img src="../images/features-slider-item/arrow-right.svg" alt=""></button>',
  		prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/features-slider-item/arrow-left.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 730,
          settings: {
            arrows: false,
          }
        },
      ]
	});

    $('.followers-feed__inner-slider').slick({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 3, 
      nextArrow: '<button class="slick-arrow slick-next"><img src="../images/features-slider-item/arrow-right.svg" alt=""></button>',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/features-slider-item/arrow-left.svg" alt=""></button>',
       responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 2,
          }
        },

        {
          breakpoint: 730,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
  });

  $('.feedback__slider-inner').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  });

    $('.blog-slider__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
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

$('.product-page__aside-filter-title').on('click', function(){
  $(this).next('ul').slideToggle();
});

$('.product-page__aside-filter-title').on('click', function(){
  $(this).next('.aside-filter__product-circle-inner').slideToggle();
});

$('.icon-th-list').on('click', function(){
  $('.product__item').addClass('list');
  $('.icon-th-list').addClass('active-btn');
  $('.icon-th').removeClass('active-btn');
});

$('.icon-th').on('click', function(){
  $('.product__item').removeClass('list');
  $('.icon-th').addClass('active-btn');
  $('.icon-th-list').removeClass('active-btn');
});


$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: "$"
});

$('.single-product-tabs .tab').on('click', function(event) {
var id = $(this).attr('data-id');
  $('.single-product-tabs').find('.tab-item').removeClass('active-tab').hide();
  $('.single-product-tabs .tabs').find('.tab').removeClass('active');
  $(this).addClass('active');
  $('#'+id).addClass('active-tab').fadeIn();
  return false;
});



document.querySelectorAll('[name=select2]').forEach(s => {
  s.addEventListener('change', function() {
    document.querySelectorAll('.checkbox-info').forEach(d => d.classList.add('deactive'));
    document.getElementById(this.value).classList.remove('deactive');
  });
});



var mixer = mixitup('.new-products__inner-box');  




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