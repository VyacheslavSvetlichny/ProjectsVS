ymaps.ready(init);

function init(){

    var myMap = new ymaps.Map("map-contacts", {
        center: [55.04216276987409,83.0169109293867],
        zoom: 15
    });

    myPlacemark = new ymaps.Placemark([55.04216276987409,83.0169109293867], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myMap.geoObjects.add(myPlacemark);
};

ymaps.ready(init2);

function init2(){
    var myMap2 = new ymaps.Map("map-delivery", {
        center: [55.004447766296174,82.9299521794705],
        zoom: 13
    });

    myPlacemark = new ymaps.Placemark([55.00592776250584,82.94660333303497], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myPlacemark2 = new ymaps.Placemark([55.01515183574663,82.9323125234036], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myPlacemark3 = new ymaps.Placemark([54.990821971940925,82.90819665854049], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myPlacemark4 = new ymaps.Placemark([55.0094476135221,82.90875455801559], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myPlacemark5 = new ymaps.Placemark([55.01144869723709,82.97877281517759], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });

    myPlacemark6 = new ymaps.Placemark([55.01771398270559,82.99454225783975], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/svg/map__mark.svg',
        iconImageSize: [53, 78],
        iconImageOffset: [-30, -72]
    });


    myMap2.geoObjects.add(myPlacemark);
    myMap2.geoObjects.add(myPlacemark2);
    myMap2.geoObjects.add(myPlacemark3);
    myMap2.geoObjects.add(myPlacemark4);
    myMap2.geoObjects.add(myPlacemark5);
    myMap2.geoObjects.add(myPlacemark6);
};