
/*================================================================
=>                  Controller = Work
==================================================================*/
/*global app, $, window*/

app.controller('WorkCtrl', ['$scope', '$rootScope', '$state', 'workService', function ($scope, $rootScope, $state, workService) {

	'use strict';
	
	$scope.workItems = workService.getWorkDatas();

	//Work thumbnail pagination
	$scope.currentIndex = 0;
	$scope.NoOfThumbnailsPerPage = 6;

	$scope.nextSet = function() {
		$scope.currentIndex < $scope.workItems.length-1 ? $scope.currentIndex += $scope.NoOfThumbnailsPerPage : $scope.currentIndex = 0;
		if($scope.currentIndex > $scope.workItems.length-1) {
			$scope.currentIndex = 0;
		}
	};

	$scope.prevSet = function() {
		$scope.currentIndex > 0 ? $scope.currentIndex -= $scope.NoOfThumbnailsPerPage : $scope.currentIndex = $scope.workItems.length - ($scope.workItems.length % $scope.NoOfThumbnailsPerPage);
		if($scope.currentIndex === $scope.workItems.length) {
			$scope.currentIndex = $scope.workItems.length - $scope.NoOfThumbnailsPerPage;
		}
	};

	$scope.$watch('currentIndex', function() {
		if($scope.workItems[$scope.currentIndex]) {
			$scope.workItemSegment = [];
			for(var i = $scope.currentIndex; i < $scope.currentIndex + $scope.NoOfThumbnailsPerPage; i++) {
				if($scope.workItems[i]){
					$scope.workItemSegment.push($scope.workItems[i]);
				}
			}
		}
	});

	$rootScope.$watch(function() {
		if($state.current.url.indexOf('work-detail') > -1) {
			setTimeout(function() {
				$('.work-detail').removeClass('slideEffectDown').addClass('slideEffectUp');
			},200);
		}

		// To open the work detail if the user enter the url
		if (window.location.href.split('work-detail')[1]!== undefined) {
			$rootScope.workItemId = window.location.href.split('work-detail')[1].split('/')[1];

			var workItemBasedOnId = $.grep($scope.workItems, function(e) {
				return e.id === $rootScope.workItemId;
			 });
			$rootScope.workItemImage = workItemBasedOnId[0].imageSrc;
			$rootScope.workItemTitle = workItemBasedOnId[0].title;
			$rootScope.workItemRole = workItemBasedOnId[0].role;
			$rootScope.workItemUrl = workItemBasedOnId[0].url; 
		}
	});

	// To open the work detail on thumbnail click
	$scope.workDetail = function(itemId, itemImage, itemTitle, itemRole, itemUrl) {
		$rootScope.workItemId = itemId;
		$rootScope.workItemImage = itemImage;
		$rootScope.workItemTitle = itemTitle;
		$rootScope.workItemRole = itemRole;
		$rootScope.workItemUrl = itemUrl; 

		$state.go('home.work.workDetail', {workItemId: $rootScope.workItemId, workItemTitle: $rootScope.workItemTitle.replace(/\s/g, '-').toLowerCase() });
	};

}]);


/*-----  End of Controller = Work  ------*/



