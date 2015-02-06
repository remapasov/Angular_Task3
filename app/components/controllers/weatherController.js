var module = angular.module("myapp");
module.controller("weatherController", function($scope, $http) {

  $scope.cities = [
    {
      city: "London",
      query: "W11"
    },
    {
      city: "Oxford",
      query: "13830"
    },
    {
      city: "Lancaster",
      query: "14043"
    }
  ]

  $scope.selected = $scope.cities[0]
  
  $scope.submit = function() {
    $http.get('/weather', {params: {uac: "el/fL0ni4V", output: "json", query: $scope.selected.query}}).
      success(function(data) {
        $scope.forecastToday = data.weather.forecast[0];
        $scope.forecastTomorrow = data.weather.forecast[1];
        $(".weatherForecast").css("display", "block");
      })
  }
});
