
/*================================================================
=>                  Directive = popupclose
==================================================================*/
/*global app*/

app.directive('popupclose', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function ($scope, element, attrs) {

			element.on('click', function() {
				var $popupContainer = $(element).parent('.work-detail');
				$popupContainer.addClass('slideEffectDown');
				setTimeout(function() {
					window.history.back();
				},200);
			});
		}
	};
}]);


/*-----  End of Directive = popupclose  ------*/