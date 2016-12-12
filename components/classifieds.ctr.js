(function() {
	'use strict'

	angular
		.module('classifieds')
		.controller('classifiedsCtrl', ['$scope', function($scope) {
			$scope.name = {
				first: 'Willy',
				last: 'Lu'
			};
	   }]);
})();