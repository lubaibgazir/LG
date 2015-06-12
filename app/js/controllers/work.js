
/*================================================================
=>                  Controller = Work
==================================================================*/
/*global app*/

app.controller('WorkCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

	'use strict';

	$scope.workItems = [

		{	
			"id" : "001",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 1",
			"role" : "balah blah blah 1", 
			"url" : "http://www.url1.com",
		},
		{	
			"id" : "002",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 2",
			"role" : "balah blah blah 2", 
			"url" : "http://www.url2.com",
		},
		{	
			"id" : "003",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 3",
			"role" : "balah blah blah 3", 
			"url" : "http://www.url3.com",
		},
		{	
			"id" : "004",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 4",
			"role" : "balah blah blah 4", 
			"url" : "http://www.url4.com",
		},
		{	
			"id" : "005",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 5",
			"role" : "balah blah blah 5", 
			"url" : "http://www.url5.com",
		},
		{	
			"id" : "006",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 6",
			"role" : "balah blah blah 6", 
			"url" : "http://www.url6.com",
		},
		{	
			"id" : "007",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 7",
			"role" : "balah blah blah 7", 
			"url" : "http://www.url7.com",
		},
		{	
			"id" : "008",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 8",
			"role" : "balah blah blah 8", 
			"url" : "http://www.url8.com",
		},
		{	
			"id" : "009",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 9",
			"role" : "balah blah blah 9", 
			"url" : "http://www.url9.com",
		},
		{	
			"id" : "010",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 10",
			"role" : "balah blah blah 10", 
			"url" : "http://www.url10.com",
		},
		{	
			"id" : "011",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 11",
			"role" : "balah blah blah 11", 
			"url" : "http://www.url11.com",
		},
		{	
			"id" : "012",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 12",
			"role" : "balah blah blah 12", 
			"url" : "http://www.url12.com",
		},
		{	
			"id" : "013",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 13",
			"role" : "balah blah blah 13", 
			"url" : "http://www.url13.com",
		},
		{	
			"id" : "014",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 14",
			"role" : "balah blah blah 14", 
			"url" : "http://www.url14.com",
		},
		{	
			"id" : "015",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 15",
			"role" : "balah blah blah 15", 
			"url" : "http://www.url15.com",
		},
		{	
			"id" : "016",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 16",
			"role" : "balah blah blah 16", 
			"url" : "http://www.url16.com",
		},
		{	
			"id" : "017",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 17",
			"role" : "balah blah blah 17", 
			"url" : "http://www.url17.com",
		},
		{	
			"id" : "018",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 18",
			"role" : "balah blah blah 18", 
			"url" : "http://www.url18.com",
		},
		{	
			"id" : "019",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 19",
			"role" : "balah blah blah 19", 
			"url" : "http://www.url19.com",
		},
	];


	//Work thumbnail pagination
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

	$rootScope.$watch(function() {
		if($state.current.url.indexOf('work-detail') > -1) {
			setTimeout(function() {
				$('.work-detail').removeClass('slideEffectDown').addClass('slideEffectUp');
			},200);
		}

		// To open the work detail if the user enter the url
		if (window.location.href.split('work-detail')[1]!== undefined) {
			$rootScope.workItemId = window.location.href.split('work-detail')[1].split("/")[1];

			var workItemBasedOnId = $.grep($scope.workItems, function(e) {
				return e.id == $rootScope.workItemId;
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



