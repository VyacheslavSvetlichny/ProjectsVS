var selector = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new Swiper('.catalog-slider',{

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
          slidesPerView: 3,
          spaceBetween: 12
        },
        769: {
          slidesPerView: 3,
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

new Swiper('.clients-slider',{

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
        slidesPerView: 3,
        spaceBetween: 12
      },
      769: {
        slidesPerView: 3,
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
});

$('input[type="file"]').change(function() {
    if (this.files[0]) // если выбрали файл
    $(this).siblings('label').text(this.files[0].name);
    $(this).siblings('label').addClass('active');
    });

$(document).ready(function() {
  $('.menu__burger,.mobile-menu__close').click(function(event) {
    $('.menu__burger,.mobile-menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});