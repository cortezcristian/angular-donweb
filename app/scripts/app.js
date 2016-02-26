'use strict';

/**
 * @ngdoc overview
 * @name angularDonwebApp
 * @description
 * # angularDonwebApp
 *
 * Main module of the application.
 */
angular
  .module('angularDonwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'adf',
    'adf.structures.base',
    'ngTouch'
  ])
  .config(function ($routeProvider, dashboardProvider) {
    dashboardProvider
      .structure('6-6', {
        rows: [{
          columns: [{
            styleClass: 'col-md-6'
          }, {
            styleClass: 'col-md-6'
          }]
        }]
      });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
