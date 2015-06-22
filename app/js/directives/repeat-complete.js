
/*================================================================
=>                  Directive = repeatComplete
==================================================================*/
/*global app*/

app.directive('repeatComplete', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			if(scope.$last) {
				//$rootScope.loadingSpinner = false;
			}
		}
	};
}]);


/*-----  End of Directive = repeatComplete  ------*/