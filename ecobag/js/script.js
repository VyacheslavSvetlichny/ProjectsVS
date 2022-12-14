var selector = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new Swiper('.catalog-slider__content',{

    navigation: {
        nextEl: '.catalog-next',
        prevEl: '.catalog-prev'
    },

    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12
        },
        580: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        677: {
          slidesPerView: 2,
          spaceBetween: 12
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 12
            },
        993: {
          slidesPerView: 4,
          spaceBetween: 12
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 12
        }
    },
});

new Swiper('.clients-slider__content',{

    navigation: {
        nextEl: '.clients-next',
        prevEl: '.clients-prev'
    },

    slidesPerView: 6,
    spaceBetween: 12,
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      677: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 12
          },
      993: {
        slidesPerView: 5,
        spaceBetween: 12
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 12
      }
  },
});

new Swiper('.special-slider',{

    navigation: {
        nextEl: '.special-next',
        prevEl: '.special-prev'
    },

    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      677: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 10
          },
      993: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      }
  },
});

$('input[type="file"]').change(function() {
    if (this.files[0]) // ???????? ?????????????? ????????
    $(this).siblings('label').text(this.files[0].name);
    $(this).siblings('label').addClass('active');
    });

$(document).ready(function() {
  $('.menu__burger,.mobile-menu__close').click(function(event) {
    $('.menu__burger,.mobile-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
  $('.mobile-menu__shadow').click(function (event) {
		$('.mobile-menu').removeClass('active');
    $('body').removeClass('lock');
		$('.menu__burger').removeClass('active');
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