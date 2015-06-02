
/*================================================================
=>                  Controller = Work
==================================================================*/
/*global app*/

app.controller('WorkCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

	'use strict';

	$scope.workItems = [

		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 1",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 2",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 3",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 4",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 5",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 6",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 7",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 8",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 9",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 10",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 11",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 12",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 13",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 14",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 15",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 16",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 17",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 18",
			
		},
		{	
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 19",
			
		},
	];

	$scope.currentIndex = 0;
	$scope.NoOfThumbnailsPerPage = 6;

	$scope.nextSet = function() {
		$scope.currentIndex < $scope.workItems.length - 1 ? $scope.currentIndex = $scope.currentIndex + $scope.NoOfThumbnailsPerPage : $scope.currentIndex = 0;
	};

	$scope.prevSet = function() {
		$scope.currentIndex > 0 ? $scope.currentIndex = $scope.currentIndex - $scope.NoOfThumbnailsPerPage : $scope.currentIndex = $scope.workItems.length - 1;
	};

	$scope.$watch('currentIndex', function() {
		$scope.workItemSegment = [];
		for(var i = $scope.currentIndex; i < $scope.currentIndex + $scope.NoOfThumbnailsPerPage; i++) {
			if($scope.workItems[i]){
				$scope.workItemSegment.push($scope.workItems[i]);
			}
		}
	});

	$scope.workDetail = function() {
		$state.go('home.work.workDetail');
	};

	
	

}]);


/*-----  End of Controller = Work  ------*/



