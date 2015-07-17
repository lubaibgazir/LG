
/*================================================================
=>                  App = lg
==================================================================*/
/*global angular*/

var app = angular.module('lg', ["ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngAnimate", /*"ui.utils",*/ "ui.router"]);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
	'use strict';

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/layout.html',
		})
		.state('home.welcome', {
			url: 'welcome',
			templateUrl: 'templates/welcome.html'
		})
		.state('home.work', {
			url: 'work',
			templateUrl: 'templates/work.html'
		})
		.state('home.work.workDetail', {
			url: '/work-detail/:workItemId/:workItemTitle',
			templateUrl: 'templates/work_detail.html',
			controller: 'WorkCtrl',

		})
		.state('home.skills', {
			url: 'skills',
			templateUrl: 'templates/skills.html'
		});

		

		$urlRouterProvider.otherwise('welcome');

	//$locationProvider.hashPrefix('!');

	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  lg App Run()  
==================================================================*/

app.run(['$rootScope', '$state', function ($rootScope, $state) {
	
	'use strict';
	console.log('Angular.js run() function...');

}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */