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

    //$scope.data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nunc vitae orci pharetra maximus. Proin malesuada vitae mi in bibendum. Proin sollicitudin, sapien nec pulvinar consequat, augue arcu tincidunt nunc, vitae efficitur sapien ante at elit. Integer eu est ac tortor commodo laoreet. Cras porttitor ornare lectus, malesuada vulputate sapien euismod et. Sed vitae eros felis. Quisque sit amet risus purus. Duis laoreet, nulla a ultricies egestas, massa nulla volutpat metus, id laoreet libero elit non massa. Praesent non hendrerit urna. Vivamus mollis tempus tortor vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mattis nibh. Sed lacinia nunc nec mauris porta hendrerit. Duis semper sed elit non vestibulum. Aliquam vestibulum pharetra odio, id auctor dolor fringilla eget. Proin sollicitudin blandit interdum. Nunc in ligula non elit luctus accumsan. Sed justo est, lacinia at nisl id, ultricies gravida nulla. Duis eu quam ac tellus posuere pharetra vitae vitae mauris. Sed iaculis mi in eros laoreet sollicitudin. Sed accumsan suscipit mauris malesuada faucibus. Aliquam rutrum nunc mauris, sit amet tempus dui tristique eget. Phasellus dignissim purus eu viverra elementum. Aliquam id lobortis elit. Vivamus volutpat massa eget hendrerit porta. Morbi commodo, diam at malesuada varius, magna tellus lacinia augue, ut fermentum ligula urna in ante. Praesent cursus magna felis. Proin eu lacus quis neque pulvinar viverra a ut augue. Phasellus mattis tristique pellentesque. Nullam aliquam lacus ipsum, eget eleifend leo porttitor sed. Morbi dictum ante eu consectetur sodales. Maecenas suscipit odio in arcu pretium egestas. Nam molestie posuere porttitor. Aliquam commodo elementum sapien vel blandit. Sed lobortis vestibulum erat, quis tristique sem pulvinar vitae. Fusce augue turpis, ultrices a tempor dapibus, dictum non lectus. Mauris ac egestas ligula, ac elementum turpis. Mauris nec fringilla dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec enim vitae mi ultrices dictum nec quis est. Etiam accumsan nunc vitae massa cursus rutrum. Vestibulum sit amet felis nec justo convallis tincidunt. Nullam vel condimentum ligula. Fusce in aliquam nisl, ut malesuada libero. Donec et lacus ex. Proin luctus venenatis feugiat. Aenean imperdiet laoreet porta."

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