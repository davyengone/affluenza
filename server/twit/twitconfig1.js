/*
locstream = new Meteor.Stream('loc');

if (Meteor.isServer) {
	Meteor.methods({
		twit_get: function() {
			var T = new TwitMaker({
				consumer_key:         'foo',
				consumer_secret:      'foo',
				access_token:         'foo',
				access_token_secret:  'foo'
			});
			var newYork = [ '-74.253595', '40.49704', '-73.700272', '40.932895' ];
			/*var stream = T.stream('statuses/sample', { locations: newYork });
			stream.on('data', function (data) {
				if (data.geo){
					locstream.emit('update', {coords: data.geo.coordinates, lang: data.lang, msg:data.text});
				}
			});*//*
			Twit.get(
				'search/tweets', { locations: newYork},
				function(err, reply) {
					console.log(reply);
				});
		}
	});
}
*/