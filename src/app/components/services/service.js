
/*
* The service to get the acutal forecast data from Open Weather Map and to return an object of the data.
*/
app.service('openWeatherMap', ['$http', function ($http) {
    var apiKey = '44db6a862fba0b067b1930da0d769e98';
    var apiUrl = 'http://api.openweathermap.org/data/2.5/';
    var openweathermapFactory = {};
    openweathermapFactory.getWeatherByCityName = function (location) {
		// http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&cnt=5&appid=44db6a862fba0b067b1930da0d769e98
        var URL = apiUrl+'forecast/daily?q='+location+'&lang=en&mode=json&units=metric&cnt=5&appid='+apiKey;
        return $http.get(URL)
            .then(function(result) {
                return result.data;
            });    

    };

    return openweathermapFactory;

}]);