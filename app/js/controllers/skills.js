
/*================================================================
=>                  Controller = Skills
==================================================================*/
/*global app*/

app.controller('SkillsCtrl', ['$scope', function ($scope) {

	'use strict';

	$scope.skillsItems = [

		{
			'title' : 'HTML5/CSS3',
			'imgSrc' : 'img/skills/htmlcss.jpg',
			'strength' : '99%'
		},
		{
			'title' : 'AngularJS',
			'imgSrc' : 'img/skills/angularjs.jpg',
			'strength' : '50%'
		},
		{
			'title' : 'Javascript',
			'imgSrc' : 'img/skills/js.jpg',
			'strength' : '65%'
		},
		{
			'title' : 'Responsive Web',
			'imgSrc' : 'img/skills/responsive.jpg',
			'strength' : '99%'
		},
		{
			'title' : 'Photoshop',
			'imgSrc' : 'img/skills/photoshop.jpg',
			'strength' : '95%'
		}
	];
	
}]);


/*-----  End of Controller = Skills  ------*/



