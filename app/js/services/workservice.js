
/*================================================================
=>                   Service = workService
==================================================================*/
/*global app*/

app.service('workService', ['$rootScope', function ($rootScope) {

	'use strict';
	var workDatas = [
		{
			'id' : '001',
			'imageSrc' : 'img/work/lubaibgazir_blue.jpg',
			'title' : 'Lubaib Gazir',
			'role' : 'HTML&CSS, Angular JS, Javascript; Responsive', 
			'url' : 'http://www.lubaibgazir.in',
		},
		// {
		// 	'id' : '002',
		// 	'imageSrc' : 'img/work/erevmax.jpg',
		// 	'title' : 'Erevmax',
		// 	'role' : 'HTML&CSS, Angular JS; Responsive', 
		// 	'url' : '#',
		// },
		{
			'id' : '002',
			'imageSrc' : 'img/work/icare.jpg',
			'title' : 'iCare Life',
			'role' : 'HTML&CSS, Angular JS; Responsive', 
			'url' : 'https://www.icare.life/#/landing',
		},
		{
			'id' : '003',
			'imageSrc' : 'img/work/meta.jpg',
			'title' : 'Meta',
			'role' : 'HTML&CSS, Javascript; Responsive', 
			'url' : 'http://meta.staging.zyferdigital.com/',
		},
		{
			'id' : '004',
			'imageSrc' : 'img/work/xlab.jpg',
			'title' : 'Exchange Lab',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://xlab.staging.zyferdigital.com/',
		},
		{	
			'id' : '005',
			'imageSrc' : 'img/work/acg.jpg',
			'title' : 'The American College of Greece',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.acg.edu/',
		},
		{	
			'id' : '006',
			'imageSrc' : 'img/work/frances.jpg',
			'title' : 'Frances Miller',
			'role' : 'Layout designing; HTML&CSS, Javascript; Responsive', 
			'url' : 'http://www.oakvillecounsellingservices.com/',
		},
		{	
			'id' : '007',
			'imageSrc' : 'img/work/caledon.jpg',
			'title' : 'Caledon Ski Club',
			'role' : 'Layout designing; HTML&CSS, Javascript; Responsive', 
			'url' : 'http://caledonskiclub.com/',
		},
		{	
			'id' : '008',
			'imageSrc' : 'img/work/jvs.jpg',
			'title' : 'JVS Toronto',
			'role' : 'HTML&CSS, Javascript; Responsive', 
			'url' : 'http://jvs.staging.zyferdigital.com/',
		},
		{	
			'id' : '009',
			'imageSrc' : 'img/work/mpb.jpg',
			'title' : 'My Picture Book',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.mypicturebook.ca/',
		},
		{	
			'id' : '010',
			'imageSrc' : 'img/work/sweetgrassspa.jpg',
			'title' : 'Sweetgrass Spa',
			'role' : 'HTML&CSS, Javascript; Responsive', 
			'url' : 'http://sweetgrassspa.ca/',
		},
		{	
			'id' : '011',
			'imageSrc' : 'img/work/yesill.jpg',
			'title' : 'Yesillbill',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://test.panzertechnologies.com/designs/yesilbill/',
		},
		{	
			'id' : '012',
			'imageSrc' : 'img/work/abs.jpg',
			'title' : 'ABS Technologies',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.abstechnologies.net/',
		},
		{	
			'id' : '013',
			'imageSrc' : 'img/work/alun.jpg',
			'title' : 'Alun Evans',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.alunevans.com/',
		},
		{	
			'id' : '014',
			'imageSrc' : 'img/work/aot.jpg',
			'title' : 'Accelerated Oil Technologies',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.acceleratedoil.com/',
		},
		{	
			'id' : '015',
			'imageSrc' : 'img/work/cafeine.jpg',
			'title' : 'Cafeine',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://cafeine.in/',
		},
		{	
			'id' : '016',
			'imageSrc' : 'img/work/handc.jpg',
			'title' : 'Home & Cottages',
			'role' : 'Responsive for iphone', 
			'url' : 'http://homesandcottages.com/consumer/',
		},
		{	
			'id' : '017',
			'imageSrc' : 'img/work/panzer_healthcare.jpg',
			'title' : 'Panzer Healthcare',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.panzerhealthcare.com/',
		},
		{	
			'id' : '018',
			'imageSrc' : 'img/work/ruche.jpg',
			'title' : 'Studios Ruche',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://studios-ruche.com/',
		},
		{	
			'id' : '019',
			'imageSrc' : 'img/work/saturn.jpg',
			'title' : 'Saturn Scale Systems Inc',
			'role' : 'Layout designing; HTML&CSS, Javascript', 
			'url' : 'http://www.saturnscale.com/',
		},
		{	
			'id' : '020',
			'imageSrc' : 'img/work/square.jpg',
			'title' : 'Out of the Square Experience',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.outofthesquareexperience.com.au/',
		},
		{	
			'id' : '021',
			'imageSrc' : 'img/work/valors.jpg',
			'title' : 'Valors Inc',
			'role' : 'Layout designing; HTML&CSS, Javascript', 
			'url' : 'http://www.valorsinc.com/',
		},
		{	
			'id' : '022',
			'imageSrc' : 'img/work/sunview.jpg',
			'title' : 'Sunview Patio Doors',
			'role' : 'HTML&CSS, Javascript', 
			'url' : 'http://www.sunviewdoors.com/',
		},
		{	
			'id' : '023',
			'imageSrc' : 'img/work/exceltax.jpg',
			'title' : 'Excel Tax',
			'role' : 'Layout designing; HTML&CSS', 
			'url' : 'http://www.exceltaxservice.ca/',
		}		
	];

	this.getWorkDatas = function () {
        return workDatas;
    };

}]);


/*-----  End of Service = workService  ------*/