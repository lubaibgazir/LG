
/*================================================================
=>                  App = lg
==================================================================*/
/*global angular*/

var app = angular.module('lg', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "ui.utils", "ui.router"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$stateProvider
		.state('layout', {
			url: '/layout',
			templateUrl: 'templates/layout.html',
		})
		.state('layout.welcome', {
			url: '/welcome',
			templateUrl: 'templates/welcome.html'
		});

		

		$urlRouterProvider.otherwise('layout/welcome');

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