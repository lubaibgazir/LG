
/*================================================================
=>                  Directive = popupclose
==================================================================*/
/*global app, $, window*/

app.directive('popupclose', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function ($scope, element, attrs) {

			element.on('click', function() {
				var $popupContainer = $(element).parent('.work-detail');
				$popupContainer.removeClass('slideEffectUp').addClass('slideEffectDown');
				setTimeout(function() {
					window.history.back();
					$rootScope.loadingSpinner = false;
				},200);
			});
		}
	};
}]);


/*-----  End of Directive = popupclose  ------*/