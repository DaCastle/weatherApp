(function () {
    "use strict";

    var homePage = angular.module('homePage', []);


    angular.module('homePage').directive('myHeader', function() {
      return {
        templateUrl: 'angularJS/directives/header.html'
      };
    });
    angular.module('homePage').directive('portfolio', function() {
      return {
        templateUrl: 'angularJS/directives/portfolio.html'
      };
    });
    angular.module('homePage').directive('about', function() {
      return {
        templateUrl: 'angularJS/directives/about.html'
      };
    });
    angular.module('homePage').directive('contact', function() {
      return {
        templateUrl: 'angularJS/directives/contact.html'
      };
    });
    angular.module('homePage').directive('myFooter', function() {
      return {
        templateUrl: 'angularJS/directives/footer.html'
      };
    });
    angular.module('homePage').directive('portfolioModals', function() {
      return {
        templateUrl: 'angularJS/directives/portfolioModals.html'
      };
    });



    homePage.controller('homeController', ['$scope',
        function ($scope) {
          $scope.keyWords = "professional problem solver";
        }]);
})();
