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
    var myMap = new ymaps.Map("map-contacts", {
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
};

ymaps.ready(init2);

function init2(){
    // Создание карты.
    var myMap2 = new ymaps.Map("map-delivery", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.004447766296174,82.9299521794705],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13
    });

    myPlacemark = new ymaps.Placemark([55.00592776250584,82.94660333303497], {}, {
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

    myPlacemark2 = new ymaps.Placemark([55.01515183574663,82.9323125234036], {}, {
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

    myPlacemark3 = new ymaps.Placemark([54.990821971940925,82.90819665854049], {}, {
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

    myPlacemark4 = new ymaps.Placemark([55.0094476135221,82.90875455801559], {}, {
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

    myPlacemark5 = new ymaps.Placemark([55.01144869723709,82.97877281517759], {}, {
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

    myPlacemark6 = new ymaps.Placemark([55.01771398270559,82.99454225783975], {}, {
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


    myMap2.geoObjects.add(myPlacemark);
    myMap2.geoObjects.add(myPlacemark2);
    myMap2.geoObjects.add(myPlacemark3);
    myMap2.geoObjects.add(myPlacemark4);
    myMap2.geoObjects.add(myPlacemark5);
    myMap2.geoObjects.add(myPlacemark6);
};