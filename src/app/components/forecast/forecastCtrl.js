/*
* Forecast Controller to get weather from open weather map
* 
*/
app.controller('forecastCtrl', ['$scope','openWeatherMap', function($scope,openWeatherMap) {
    var PROVIDE_LOC = '! Please provide a location';
    var SERVER_ERROR = '! Unable to get weather information. Please try again later.'
    $scope.message = '';
    $scope.validData = false;    

    // On load show London weather by default
    openWeatherMap.getWeatherByCityName('london').then(function (result) {
        $scope.forecast = result;
        $scope.validData = true;
    }, function (result) { // on failure
		$scope.message = SERVER_ERROR;
    });    

    // Get forecast info by location
    $scope.getForecastByLocation = function() {

        if (angular.isUndefined($scope.location)) {
           $scope.message = PROVIDE_LOC;
           return;
        }

      // Get weather by city name
      openWeatherMap.getWeatherByCityName($scope.location).then(function (result) {
          $scope.forecast = result;
          $scope.message = '';
          $scope.validData = true;
      }, function (result) { // on failure
          $scope.message = SERVER_ERROR;
      });
    };  
 }]);