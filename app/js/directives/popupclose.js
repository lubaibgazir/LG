
/*================================================================
=>                  Directive = popupclose
==================================================================*/
/*global app*/

app.directive('popupclose', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('Directive === popupclose');
		}
	};
}]);


/*-----  End of Directive = popupclose  ------*/