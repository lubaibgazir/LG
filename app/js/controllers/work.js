
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

	$scope.workItemsPerPage = 6;
	$scope.currentSet = 6;
	var i = 0;
	$scope.loadWorkItemsSegment = function() {
		$scope.workItemsSegments = [];
		for(i; i < $scope.workItemsPerPage; i++) {
			$scope.workItemsSegments.push($scope.workItems[i]);
		}
	}
	$scope.loadWorkItemsSegment();

	$scope.nextSegment = function() {
		i = i + 1;
		$scope.workItemsPerPage = $scope.workItemsPerPage + $scope.currentSet;
		$scope.loadWorkItemsSegment();
		console.log("$scope.workItemsSegments=======", $scope.workItemsSegments);
	}
	
	console.log("$scope.workItemsSegments>>>>>>", $scope.workItemsSegments);

}]);


/*-----  End of Controller = Work  ------*/



