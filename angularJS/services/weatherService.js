(function () {
    "use strict";

    angular.module('homePage')

        .service('weatherService', function ($http, $q, $window, $location) {

            return {
                getForecast: function () {
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22minneapolis%2C%20mn%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
                    }).success(function (data, status, headers, config) {
                        deferred.resolve(data);
                    }).error(function (data, status, headers, config) {
                        deferred.reject(status);
                    });
                    return deferred.promise;
                }
            };



        });
})();
