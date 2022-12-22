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

    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     spaceBetween: 12
    //   },
    //   580: {
    //     slidesPerView: 2,
    //     spaceBetween: 25
    //   },
    //   677: {
    //     slidesPerView: 3,
    //     spaceBetween: 12
    //   },
    //   769: {
    //     slidesPerView: 3,
    //     spaceBetween: 12
    //       },
    //   993: {
    //     slidesPerView: 5,
    //     spaceBetween: 12
    //   },
    //   1280: {
    //     slidesPerView: 6,
    //     spaceBetween: 12
    //   }
//   },
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

    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //     spaceBetween: 12
    //   },
    //   580: {
    //     slidesPerView: 2,
    //     spaceBetween: 25
    //   },
    //   677: {
    //     slidesPerView: 3,
    //     spaceBetween: 12
    //   },
    //   769: {
    //     slidesPerView: 3,
    //     spaceBetween: 12
    //       },
    //   993: {
    //     slidesPerView: 5,
    //     spaceBetween: 12
    //   },
    //   1280: {
    //     slidesPerView: 6,
    //     spaceBetween: 12
    //   }
//   },
});

$(document).ready(function() {
    $('.title-more__button').click(function(event) {
      $('.title-about').toggleClass('active');
    });
  });


var $page = $('html, body');
  $('a[href*="#"]').click(function() {
  if($(this).attr('href')!="#"){
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