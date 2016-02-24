/*
* Forecast Controller to get weather from open weather map
* 
*/
app.controller('forecastCtrl', ['$scope', '$filter','openWeatherMap', function($scope,$filter,openWeatherMap) {
    $scope.message = '';
    var iconUrl = 'http://openweathermap.org/img/w/';

    // On load show London weather by default
    openWeatherMap.getWeatherByCityName('london').then(function (result) {
      $scope.forecast = result;
    }, function (result) { // on failure

    });    

    // Get forecast info by location
    $scope.getForecastByLocation = function() {
      // Get weather by city name
      openWeatherMap.getWeatherByCityName($scope.location).then(function (result) {
        $scope.forecast = result;
      }, function (result) { // on failure

      });
    };    

    $scope.getIconUrl = function(icon) {
        return (icon ? iconUrl + icon + '.png' : '');
    };

	 $scope.parseDate = function (date) {
	    return  $filter('date')(new Date(date * 1000), 'fullDate');
	};   
 }]);