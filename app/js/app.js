
/*================================================================
=>                  App = lg
==================================================================*/
/*global angular*/

var app = angular.module('lg', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", "ui.utils", "ui.router"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/layout.html',
		})
		.state('home.welcome', {
			url: '/welcome',
			templateUrl: 'templates/welcome.html'
		})
		.state('home.portfolio', {
			url: '/portfolio',
			templateUrl: 'templates/portfolio.html'
		})
		.state('home.skills', {
			url: '/skills',
			templateUrl: 'templates/skills.html'
		});

		

		$urlRouterProvider.otherwise('home/welcome');

	//$locationProvider.hashPrefix('!');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  lg App Run()  
==================================================================*/

app.run(['$rootScope', function ($rootScope) {
	
	'use strict';

	$rootScope.navigationMenus = ['welcome', 'work', 'skills']

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */