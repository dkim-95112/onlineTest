'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
]);

myApp.controller('HomeCtrl', ['$scope',
  function($scope) {
    $scope.name = 'HomeCtrl';

    $scope.loremIpsum = "Lorem ipsum dolor sit amet"

}]).controller('MenuCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.name = 'MenuCtrl';
    $scope.isActive = function(path){
    	return $location.path() == path;
    }
}]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);