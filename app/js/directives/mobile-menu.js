
/*================================================================
=>                  Directive = mobileMenu
==================================================================*/
/*global app*/

app.directive('mobileMenu', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs, $window) {
			var $myWindow = angular.element($window);

			scope.checkWindowWidth = function() {
				if(window.innerWidth < 1024) {

					element.on('click', function() {
						element.toggleClass('mobile-menu');
						if(element.hasClass('mobile-menu')) {
							$(element).closest('header').addClass('h100');
						}
						else{
							$(element).closest('header').removeClass('h100');
						}
					});
				}
			};
			scope.checkWindowWidth();

			$myWindow.on('resize', function() {
				scope.checkWindowWidth();
			})
		}
	};
}]);


/*-----  End of Directive = mobileMenu  ------*/