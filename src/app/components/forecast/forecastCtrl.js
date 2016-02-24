/*
* Forecast Controller to get weather from open weather map
* 
*/
app.controller('forecastCtrl', ['$scope','openWeatherMap', function($scope,openWeatherMap) {
    $scope.message = 'Test';

    // On load show London weather by default
    openWeatherMap.getWeatherByCityName('london').then(function (result) {
      $scope.forecast = result;
    }, function (result) { // on failure

    });    

 }]);