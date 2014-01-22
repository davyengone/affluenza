/*
//This JS should connect to twitter's streaming API and collect  tweets, logging 'failllll' if not
tweets = new Meteor.Collection('tweets');

	Meteor.methods({
		twit_get: function() {
			//Connect to twitter streaming API
			var T = new TwitMaker({
				consumer_key:         'dWv3a46yUYHLyH8stz2mA',
				consumer_secret:      'J7R8NHbqa1cPgXvl5l7Ju1hExTmh93oI6AIXf03FFc',
				access_token:         '221885820-nCB1wutgInPLixIhUmsVNxu5WKrycLtQIWxoUWLb',
				access_token_secret:  'ILGVdN8R9Ip0QudnbaO59GfdUv9WPHaoVKFQSD1MX8yVW'
			});
			//Set the search area to New York, collect geo data, lang data and msg data
			var newYork = [ '-74.253595', '40.49704', '-73.700272', '40.932895' ];
			var stream = T.stream('statuses/sample', { locations: newYork });
			stream.on('data', function (data) {
				if (data.geo){
					tweets.insert('', function() {console.log('faillll');});
				}
			});
		}
	});
*/