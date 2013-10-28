'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope) {
	$scope.sounds = [];
	for(var i = 0; i < 24; i++) {
		$scope.push(
			{pic: 'http://osxdaily.com/wp-content/uploads/2013/03/sound-icon.png'}
		);
	};
  })
  .controller('MyCtrl2', [function() {

  }]);
