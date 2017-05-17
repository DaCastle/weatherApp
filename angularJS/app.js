(function () {
    "use strict";

    var homePage = angular.module('homePage', []);

    // angular.module('homePage').directive('myHeader', function() {
    //   return {
    //     templateUrl: 'angularJS/directives/header.html'
    //   };
    // });

    homePage.controller('homeController', ['$scope', 'weatherService',
        function ($scope, weatherService) {

          $scope.keyWords = "professional problem solver";
          $scope.forecast = {};

          weatherService.getForecast().then(function (data) {
            $scope.forecast = data;
          })


        }]);
})();
