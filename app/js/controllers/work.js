
/*================================================================
=>                  Controller = Work
==================================================================*/
/*global app*/

app.controller('WorkCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

	'use strict';

	$scope.workItems = [

		{	
			"id" : "001",
			"imageSrc" : "img/work/meta.jpg",
			"title" : "Meta",
			"role" : "HTML&CSS, Javascript; Responsive", 
			"url" : "http://meta.staging.zyferdigital.com/",
		},
		{	
			"id" : "002",
			"imageSrc" : "img/work/xlab.jpg",
			"title" : "Exchange Lab",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://xlab.staging.zyferdigital.com/",
		},
		{	
			"id" : "003",
			"imageSrc" : "img/work/acg.jpg",
			"title" : "The American College of Greece",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.acg.edu/",
		},
		{	
			"id" : "004",
			"imageSrc" : "img/work/frances.jpg",
			"title" : "Frances Miller",
			"role" : "Layout designing; HTML&CSS, Javascript; Responsive", 
			"url" : "http://www.oakvillecounsellingservices.com/",
		},
		{	
			"id" : "005",
			"imageSrc" : "img/work/caledon.jpg",
			"title" : "Caledon Ski Club",
			"role" : "Layout designing; HTML&CSS, Javascript; Responsive", 
			"url" : "http://caledonskiclub.com/",
		},
		{	
			"id" : "006",
			"imageSrc" : "img/work/jvs.jpg",
			"title" : "JVS Toronto",
			"role" : "HTML&CSS, Javascript; Responsive", 
			"url" : "http://jvs.staging.zyferdigital.com/",
		},
		{	
			"id" : "007",
			"imageSrc" : "img/work/mpb.jpg",
			"title" : "My Picture Book",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.mypicturebook.ca/",
		},
		{	
			"id" : "008",
			"imageSrc" : "img/work/sweetgrassspa.jpg",
			"title" : "Sweetgrass Spa",
			"role" : "HTML&CSS, Javascript; Responsive", 
			"url" : "http://sweetgrassspa.ca/",
		},
		{	
			"id" : "009",
			"imageSrc" : "img/work/yesill.jpg",
			"title" : "Yesillbill",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://test.panzertechnologies.com/designs/yesilbill/",
		},
		{	
			"id" : "010",
			"imageSrc" : "img/work/abs.jpg",
			"title" : "ABS Technologies",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.abstechnologies.net/",
		},
		{	
			"id" : "011",
			"imageSrc" : "img/work/alun.jpg",
			"title" : "Alun Evans",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.alunevans.com/",
		},
		{	
			"id" : "012",
			"imageSrc" : "img/work/aot.jpg",
			"title" : "Accelerated Oil Technologies",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.acceleratedoil.com/",
		},
		{	
			"id" : "013",
			"imageSrc" : "img/work/cafeine.jpg",
			"title" : "Cafeine",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://cafeine.in/",
		},
		{	
			"id" : "014",
			"imageSrc" : "img/work/handc.jpg",
			"title" : "Home & Cottages",
			"role" : "Responsive for iphone", 
			"url" : "http://homesandcottages.com/consumer/",
		},
		{	
			"id" : "015",
			"imageSrc" : "img/work/panzer_healthcare.jpg",
			"title" : "Panzer Healthcare",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.panzerhealthcare.com/",
		},
		{	
			"id" : "016",
			"imageSrc" : "img/work/ruche.jpg",
			"title" : "Studios Ruche",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://studios-ruche.com/",
		},
		{	
			"id" : "017",
			"imageSrc" : "img/work/saturn.jpg",
			"title" : "Saturn Scale Systems Inc",
			"role" : "Layout designing; HTML&CSS, Javascript", 
			"url" : "http://www.saturnscale.com/",
		},
		{	
			"id" : "018",
			"imageSrc" : "img/work/square.jpg",
			"title" : "Out of the Square Experience",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.outofthesquareexperience.com.au/",
		},
		{	
			"id" : "019",
			"imageSrc" : "img/work/valors.jpg",
			"title" : "Valors Inc",
			"role" : "Layout designing; HTML&CSS, Javascript", 
			"url" : "http://www.valorsinc.com/",
		},
		{	
			"id" : "020",
			"imageSrc" : "img/work/sunview.jpg",
			"title" : "Sunview Patio Doors",
			"role" : "HTML&CSS, Javascript", 
			"url" : "http://www.sunviewdoors.com/",
		},
		{	
			"id" : "021",
			"imageSrc" : "img/work/exceltax.jpg",
			"title" : "Excel Tax",
			"role" : "Layout designing; HTML&CSS", 
			"url" : "http://www.exceltaxservice.ca/",
		},
		{	
			"id" : "022",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 22",
			"role" : "balah blah blah 22", 
			"url" : "http://www.url22.com",
		},
		{	
			"id" : "023",
			"imageSrc" : "img/work/port-0.jpg",
			"title" : "Title 19",
			"role" : "balah blah blah 19", 
			"url" : "http://www.url19.com",
		},
		{	
			"id" : "024",
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



