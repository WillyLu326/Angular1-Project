(function() {
	'use strict'

	angular
		.module('classifieds')
		.controller('classifiedsCtrl', function($scope) {
			$scope.name = {
				first: 'Willy',
				last: 'Lu'
			};
	   });
})();