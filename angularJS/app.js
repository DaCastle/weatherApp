(function () {
    "use strict";

    var homePage = angular.module('homePage', ['chart.js']);

    // angular.module('homePage').directive('myHeader', function() {
    //   return {
    //     templateUrl: 'angularJS/directives/header.html'
    //   };
    // });

    homePage.controller('homeController', ['$scope', 'weatherService',
        function ($scope, weatherService) {

          $scope.loading = true;
          $scope.barOrLine = "line";
          $scope.results = {};
          $scope.forecast = {};
          $scope.data = [];
          $scope.labels = [];
          $scope.temperatureSeries = ['Low of', 'High of'];
          $scope.colors = ['#00ADF9', '#8c051c'];

          weatherService.getForecast().then(function (data) {

            $scope.results = data.query.results.channel;
            $scope.forecast = data.query.results.channel.item.forecast;
            setLabels();
            setData();
            $scope.loading = false;
          });


          function setLabels() {
            for (let i = 0; i < $scope.forecast.length; i++) {
              $scope.labels.push($scope.forecast[i].day);
            }
          }

          function setData() {
            let low = [];
            let high = [];

            for (let i = 0; i < $scope.forecast.length; i++) {
              low.push($scope.forecast[i].low);
              high.push($scope.forecast[i].high);
            }
            $scope.data.push(low);
            $scope.data.push(high);
          }

          $scope.showBarOrLine = function() {
            $scope.barOrLine === "line" ? $scope.barOrLine = "bar" : $scope.barOrLine = "line";
          }

        }]);


})();
