(function () {
    "use strict";

    var homePage = angular.module('homePage', ['chart.js']);

    angular.module('homePage').directive('forecastTable', function() {
      return {
        templateUrl: 'angularJS/directives/forecastTable.html'
      };
    });

    angular.module('homePage').directive('myNavigation', function() {
      return {
        templateUrl: 'angularJS/directives/myNavigation.html'
      };
    });

    angular.module('homePage').directive('forecastCharts', function() {
      return {
        templateUrl: 'angularJS/directives/forecastCharts.html'
      };
    });





    homePage.controller('homeController', ['$scope', 'weatherService',
        function ($scope, weatherService) {

          $scope.loading = true;
          $scope.showGraphType = "bar";
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

          $scope.showGraph = function() {
            if ($scope.showGraphType == 'bar') {
              $scope.showGraphType = 'radar';
            }
            else if ($scope.showGraphType == 'radar') {
              $scope.showGraphType = 'line';
            }
            else {
              $scope.showGraphType = 'bar';
            }
          }

        }]);


})();
