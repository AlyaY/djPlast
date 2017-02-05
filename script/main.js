
$(document).ready(function() {
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this); // создаем объект
    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
      var coords = 'center ' + yPos + 'px';
      $bgobj.css({
        backgroundPosition: coords
      });
    });
  });
  $(window).scroll(function() {
    $('.header').toggleClass('header--bg', $(this).scrollTop() > 0);
  });
  $('.header__btn').click(function(event) {
    event.preventDefault();
    $(".header__nav").toggleClass('header__nav--show');
  });

  $('.form-open-js').click(function(event) {
    event.preventDefault();
    $(".pop-up--form").removeClass('hide');
    $('.pop-up__bg').removeClass('hide');
  });

  $('.pop-up__close-btn').click(function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('hide');
    $('.pop-up__bg').toggleClass('hide');

  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      400: {
        items: 2,
        nav: false
      },
      750: {
        items: 3,
        loop: true
      },
      1100: {
        items: 4,
        loop: false
      }
    }
  });
  $('.header__nav a').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 74
      }, 1000);
      return false;
    }
  });
  $('.catalog__btn').click(function(event) {
    event.preventDefault();
    var n;
    var text = $('.catalog__text');
    var btns = $('.catalog__btn');
    var menu = $('.catalog__list');
    for(var i = 0; i < btns.length; i++) {
      btns.eq(i).removeClass('catalog__btn--active');
      menu.eq(i).removeClass('catalog__list--active');
      text.eq(i).removeClass('catalog__text--active');
      if($(this).is(btns.eq(i))) {
        n = i;
      }
    }
    btns.eq(n).addClass('catalog__btn--active');
    menu.eq(n).addClass('catalog__list--active');
    text.eq(n).addClass('catalog__text--active');
  });
  $(window).scroll(function() {
    if (stockBlock()) {
      (function() {
        $('.stock__slide').addClass('stock__slide--show');
      })();
    }
  });


  function stockBlock() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    var blockBottom = $('.stock').offset().top + $('.stock').height();
    return windowBottom >= blockBottom;
  }

  $(".mask").inputmask('+7 (999) 999 99 99');


});
