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

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.04216276987409,83.0169109293867],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark([55.04216276987409,83.0169109293867], {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/svg/map__mark.svg',
        // Размеры метки.
        iconImageSize: [53, 78],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -72]
    });

    myMap.geoObjects.add(myPlacemark);
}