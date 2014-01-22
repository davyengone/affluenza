// create google map centered on NY area
  initialize = function() {

  //create an array of styles
  var styles = [
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#000" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#000" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.locality",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "visibility": "simplified" }
    ]
  }];
  //create a new StyledMapType object, passing it the styles array
  //and the name to be displayed on map type control
  console.log ("Initializing google maps...");
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "StyledMap"});

//Set the base map's options and include MapTypeId to add
//to the map type control and create the base map
    var mapOptions = {
      center: new google.maps.LatLng(40.714623, -74.006620),
      zoom: 11,
      mapTypeControlOptions: {
        MapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };
   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  //Associate the styled map with the MapTypeId and set it to display
   map.mapTypes.set( 'map_style', styledMap);
   map.setMapTypeId('map_style');
//add the cartoDB layer, URL is in CartoDB interface, share -API tab

var layerUrl1 = 'http://wjohnson1261.cartodb.com/api/v2/viz/95ae4b74-7e02-11e3-a54b-0e49973114de/viz.json';
cartodb.createLayer(map, layerUrl1, {
  layer_selector: true
}).addTo(map);
  };
//Set session variable of map to true
  Session.set('map',true);




