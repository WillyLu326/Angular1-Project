(function() {
	'use strict'

	angular
		.module('classifieds')
		.controller('classifiedsCtrl', function($scope, classifiedsFactory) {
			classifiedsFactory.getClassifieds().then(function(data) {
				$scope.classifieds = data.data;
				console.log('ddddd');
			});
	   });
})();