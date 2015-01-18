(function () {

    var customersService = function ($http) {

        var serviceBase = '/api/dataservice/',
            customersFactory = {};

        customersFactory.getExistingCustomers = function () {
            return $http.get(serviceBase + 'existingcustomers');
        };

        customersFactory.getNewCustomers = function (path) {
            return $http.get(serviceBase + 'newcustomers');
        };
		
		customersFactory.getUsers = function (path) {
            return $http.get(serviceBase + 'users');
        };

        return customersFactory;

    };

    angular.module('LapToCloudApp').factory('customersService',
        ['$http', customersService]);

}());