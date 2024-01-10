function init() {
    let map = new ymaps.Map('map', {
        center: [55.91908956882969,37.727481499999946],
        zoom: 14
    });
    let placemark = new ymaps.Placemark([55.91908956882969,37.727481499999946], {
        balloonContentHeader: 'Turbovoin',
        balloonContentBody: '+38 990-222-11-11',
        balloonContentFooter: 'Будем рады новым заказчиками'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '	https://cdn-icons-png.flaticon.com/512/5549/5549422.png',
        iconImageSize: [40,40],
        iconImageOffset: [-20,-20]


    });

    
    map.geoObjects.add(placemark);
    

}

ymaps.ready(init);