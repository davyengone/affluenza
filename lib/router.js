Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map( function () {
	//the about route
	this.route('about', {
		path: '/about',
		template: 'about',
		action: function () {
			console.log('now routing the about template');
		}
	});

	this.route('home', {
		path: '/',
		template: 'home',
		action: function () {
			console.log('now routing the home template');
		}
	});

	//the map route
	this.route('map', {
		path: '/map',
		template: 'map',
		action: function () {
			console.log('now routing the map template');
		}

	});
});