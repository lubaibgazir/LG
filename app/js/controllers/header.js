
/*================================================================
=>                  Controller = Header
==================================================================*/
/*global app*/

app.controller('HeaderCtrl', ['$scope', '$state', function ($scope, $state) {

	'use strict';

	$scope.navigationMenus = ['welcome', 'work', 'skills'];
	
	$scope.isActive = function (navigationMenu) {
		return navigationMenu == $state.current.url ? true : false;	
	}

	$scope.navigate = function(navigationMenu) {
	    $state.go('home.'+navigationMenu)

	}



}]);


/*-----  End of Controller = Header  ------*/



