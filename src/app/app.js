var app = angular.module('gajWeatherApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'app/components/forecast/forecast.html'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);