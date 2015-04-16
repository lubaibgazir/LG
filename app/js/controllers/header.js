
/*================================================================
=>                  Controller = Header
==================================================================*/
/*global app*/

app.controller('HeaderCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

	'use strict';

	$scope.navigationMenus = ['welcome', 'work', 'skills'];
	
	$scope.isActive = function (navigationMenu) {
		return navigationMenu == $state.current.url ? true : false;	
	}

	$rootScope.isSlideRight = false;
	
	$scope.navigate = function(navigationMenu) {
		var currentUrlIndex = $scope.navigationMenus.indexOf($state.current.url);
		$state.go('home.'+navigationMenu);
		var latestUrlIndex = $scope.navigationMenus.indexOf(navigationMenu);
		$rootScope.isSlideRight = (latestUrlIndex < currentUrlIndex ? true : false);
	    
	}

	



}]);


/*-----  End of Controller = Header  ------*/



