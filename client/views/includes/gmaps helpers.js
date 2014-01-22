gmaps = {
	//map objects
	map: null,

	//markers objects
	markers: [],

	//lat lng objects
	LatLngs: [],

	//formatted marker data objects
	markerData: [],

	//addmarker function 
	addMarker: function(marker) {
	var gLatLng = new google.maps.LatLng(marker.lat, marker.lng);
	var gMarker = new google.maps.Marker ({
	postion: gLatLng,
	map: this.map,
	title: marker.title,
	// animation: google.maps.Animation.DROP,
	icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
	});
	this.latLngs.push(gLatLng);
	this.markers.push(gMarker);
	this.markerData.push(marker);
	return gMarker;
	}
};