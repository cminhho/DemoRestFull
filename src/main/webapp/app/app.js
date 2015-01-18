(function(){
  'use strict';

  angular.module('app.modules', [
    'module.template.sidebar',
    'module.template.nav',
    'module.users',
    'module.dashboard'
  ]);

  angular.module('LapToCloudApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'app.modules'
  ]);


  angular.module('LapToCloudApp').controller('AMSCtrl', ['$scope', function ($scope) {
    $scope.$on('$routeChangeError', function (event, current, previous, rejection) {
      alert('');
    });
  }]);

  angular.module('LapToCloudApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//  $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);


})();