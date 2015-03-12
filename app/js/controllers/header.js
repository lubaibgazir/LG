
/*================================================================
=>                  Controller = Header
==================================================================*/
/*global app*/

app.controller('HeaderCtrl', ['$scope', function ($scope) {

	'use strict';

	console.log('Controller ===  HeaderCtrl');
	
	$scope.isActive = false;

	 $scope.navigate = function() {
		$scope.isActive = true;
		console.log('$scope.isActive', $scope.isActive);
	}



}]);


/*-----  End of Controller = Header  ------*/



