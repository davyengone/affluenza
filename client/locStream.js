/*
//If the map is rendered, begin the process
Template.map.rendered = function() {
    if (! Session.get('map'))
        gmaps.initialize();
//connect to the collection and add tweets to var tweets
tweets = new Meteor.Collection('tweets');
Deps.autorun(function() {
	var mytweets = tweets.find().fetch();
	_.each (mytweets, function(tweet) {
			var objMarker = {
				id: tweet._id,
				lat: tweet.location.latitude,
				lng: tweet.location.longitude,
				title: tweet.name
			};
			//add marker if id doesn't exist on map
			if (!gmaps.markerExists('id', objMarker.id))
                    gmaps.addMarker(objMarker);
	});
});
};
//Reset session if we navigate away from page
Template.map.destroyed = function() {
    Session.set('map', false);
};

*/