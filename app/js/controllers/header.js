
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

	$rootScope.navigate = function(navigationMenu) {
	    $state.go('home.'+navigationMenu)
	}



}]);


/*-----  End of Controller = Header  ------*/



