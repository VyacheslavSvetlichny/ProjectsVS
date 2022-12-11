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
});

new Swiper('.clients-slider',{

    navigation: {
        nextEl: '.clients-next',
        prevEl: '.clients-prev'
    },

    slidesPerView: 6,
    spaceBetween: 12,
    loop: true,
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