'use strict';

/**
 * @ngdoc function
 * @name angularDonwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDonwebApp
 */
angular.module('angularDonwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
