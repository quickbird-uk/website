function initialize() {
    
    var styles = [ 
    { 
        "featureType": "administrative", 
        "stylers": [ 
            { "visibility": "off" } 
        ] 
    },
    { 
        "featureType": "landscape", 
        "stylers": [ 
            { "visibility": "on" }, 
            { "color": "#ECF0F1" } 
        ] 
    },
    { 
        "featureType": "poi.place_of_worship", 
        "stylers": [
            { "visibility": "on" } 
        ]
    },
    { 
        "featureType": "road.highway", 
        "stylers": [ 
            { "visibility": "off" } 
        ]
    },
    { 
        "featureType": "road.local", 
        "stylers": [ 
            { "visibility": "off" } 
        ] 
    },
    { 
        "featureType": "road.arterial", 
        "stylers": [ 
            { "visibility": "off" } 
        ] 
    },
    { 
        "featureType": "road.local", 
        "elementType": "labels", 
        "stylers": [ 
            { "visibility": "off" } 
        ] }
    ,
    { 
        "featureType": "transit", 
        "stylers": [ 
            { "visibility": "simplified" } 
        ] 
    },
    { 
        "featureType": "water", 
        "stylers": [ 
            { "visibility": "simplified" }, 
            { "color": "#E74C3C" } 
        ] 
    },
    { 
        "featureType": "road.local", 
        "elementType": "labels.text", 
        "stylers": [
            { "visibility": "off" } 
        ] 
    },
    { 
        "featureType": "poi.place_of_worship", 
        "stylers": [ 
            { "visibility": "simplified" } 
        ] 
    },
    { 
        "featureType": "poi", 
        "elementType": "geometry", 
        "stylers": [ 
            { "visibility": "on" }, 
            { "color": "#3498DB" } 
        ] 
    },
    { 
        "featureType": "poi.business", 
        "stylers": [ 
            { "visibility": "off" } 
        ] 
    },
    { 
        "featureType": "road.local", 
        "elementType": "geometry", 
        "stylers": [ 
            { "color": "#3498DB" }, 
            { "visibility": "on" }, 
            { "weight": 0.2 } 
        ] 
    }
];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
    
    var mapProp = {
      scrollwheel: false,
      zoomControl: false,
      panControl: false,
      scaleControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      center: new google.maps.LatLng(52.481441, -1.897553),
      zoom: 15,
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }

    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var marker = new google.maps.Marker ({
      position: new google.maps.LatLng(52.481441, -1.897553),
      map: map,
      title: 'Quickbird',
      draggable: false,
      animation: google.maps.Animation.DROP
    });
}
google.maps.event.addDomListener(window, 'load', initialize);




