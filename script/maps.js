ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
        center: [55.712274, 37.690794],
        zoom: 13,
        controls: ['zoomControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark([55.712274, 37.690794], {
        balloonContent: 'GENERAL PLAST',
        hintContent: 'г. Москва, м. Кожуховская, ул. Угрешская, д.2, строение 36, бизнес-центр «IQ-Park»'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin-blue.png',
        iconImageSize: [46, 64],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-23, -64]
      });
    myMap.geoObjects.add(myPlacemark);
});
