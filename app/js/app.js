'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
]);

myApp.controller('HomeCtrl', ['$scope',
  function($scope) {
    $scope.name = 'HomeCtrl';
    $scope.loremIpsum = 'loremIpsum'
}]).controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.name = 'AboutCtrl';
}]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);