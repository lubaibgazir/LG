
/*================================================================
=>                  App = lg
==================================================================*/
/*global angular*/

var app = angular.module('lg', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "ui.utils", "ui.router"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	'use strict';

	$routeProvider
		.when('/', {
			url: '/',
			templateUrl: 'templates/layout.html'
		})
		.when('/welcome', {
			url: '/welcome',
			templateUrl: 'templates/welcome.html'
		})
		.otherwise({
			redirectTo: '/'
		});

	//$locationProvider.hashPrefix('!');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  lg App Run()  
==================================================================*/

app.run(['$rootScope', function ($rootScope) {
	
	'use strict';

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */