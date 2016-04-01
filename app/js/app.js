'use strict';

/* App Module */

var myApp = angular.module('myApp', [
  'ngRoute',
]);

myApp.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.name = 'HomeCtrl';

    $http.get('/lorem.json').success(function(data) {
      $scope.myText = data.text;
    });

    //$scope.data = "Lorem ipsum dolor sit amet"
  }
]).controller('AboutCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.name = 'HomeCtrl';

    $http.get('/about.json').success(function(data) {
      $scope.myText = data.text;
    });

    //$scope.data = "Lorem ipsum dolor sit amet"
  }
]).controller('MenuCtrl', ['$scope', '$location',
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
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);