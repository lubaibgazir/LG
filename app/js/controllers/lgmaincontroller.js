
/*================================================================
=>                  Controller = Lgmaincontroller
==================================================================*/
/*global app*/

app.controller('LgmaincontrollerCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

	'use strict';

	// show/hide spinner on ui-view change
	$rootScope.$on('$stateChangeStart',function (){
        $rootScope.loadingSpinner = true;
 	});

  	$rootScope.$on('$stateChangeSuccess',function (){
    	$rootScope.loadingSpinner = false;
 	});




}]);


/*-----  End of Controller = Lgmaincontroller  ------*/



