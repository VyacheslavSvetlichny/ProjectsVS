new Swiper('.skill-hard',{

    navigation: {
        nextEl: '.skill-hard-next',
        prevEl: '.skill-hard-prev'
    },

    pagination: {
        el: '.skill-hard-pagination',
        clickable: true,
    },

    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      580: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      677: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20
          },
      993: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      }
  },
});

new Swiper('.skill-soft',{

    navigation: {
        nextEl: '.skill-soft-next',
        prevEl: '.skill-soft-prev'
    },

    pagination: {
        el: '.skill-soft-pagination',
        clickable: true,
    },

    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      677: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20
          },
      993: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      }
  },
});

$(document).ready(function() {
    $('.title-more__button').click(function(event) {
      $('.title-about').toggleClass('active');
    });
  });


var $page = $('html, body');
  $('a[href*="#"]').click(function() {
  if($(this).attr('href')!="#" && $(this).attr('href')!="#open-modal"){
  $page.animate({
  scrollTop: $($.attr(this, 'href')).offset().top - 120}, 400);
  return false;
  }
});

$(function () {
  $(window).scroll(function(event) {
    if($(this).scrollTop() > 30) {
    $(".up-button").addClass("active");
  }
  else {
    $(".up-button").removeClass("active");
  }
  }); 
});

jQuery(document).on('click', 'a[href="#open-modal"]', function (e) {
  e.preventDefault();
  let idModal = $(this).attr('data-modal');
  if( idModal.length > 0 ){
      jQuery('html').addClass("no-scroll");
      jQuery('.modal-window').fadeOut();
      jQuery(idModal).fadeIn();
  }
});

jQuery(document).on('click', '.close-button', function () {
  jQuery('.modal-all').fadeOut();
  jQuery('html').removeClass("no-scroll");
});

jQuery(document).on('click', '.modal-close', function () {
  jQuery('.modal-all').fadeOut();
  jQuery('html').removeClass("no-scroll");
});

jQuery(document).on('click', '.modal-shadow', function () {
  jQuery('.modal-all').fadeOut();
  jQuery('html').removeClass("no-scroll");
});

$(document).ready(function() {
  $('.menu__burger,.mobile-menu__close,.mobile-menu__section').click(function(event) {
    $('.menu__burger,.mobile-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
  $('.mobile-menu__shadow').click(function (event) {
		$('.mobile-menu').removeClass('active');
    $('body').removeClass('lock');
		$('.menu__burger').removeClass('active');
	});

});