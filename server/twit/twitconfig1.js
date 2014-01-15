locstream = new Metoer.Stream('loc');

if (Meteor.isServer) {
	Meteor.startup(function () {
			var T = new Twit({
				consumer_key:         '<your keys here>',
				consumer_secret:      '<your keys here>',
				access_token:         '<your keys here>',
				access_token_secret:  '<your keys here>'
			});
			var newYork = [ '-74.253595', '40.49704', '-73.700272', '40.932895' ];
			var stream = T.stream('statuses/sample', { locations: newYork });
			stream.on('data', function (data) {
				if (data.geo){
					locstream.emit('update', {coords: data.geo.coordinates, lang: data.lang, msg:data.text});
				}
			});
	});
}
