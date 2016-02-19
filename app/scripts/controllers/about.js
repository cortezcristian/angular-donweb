'use strict';

/**
 * @ngdoc function
 * @name angularDonwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDonwebApp
 */
angular.module('angularDonwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
