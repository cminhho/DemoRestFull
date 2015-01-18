(function(){
angular.module('module.users', ['ngResource', 'ngRoute', 'resource.users'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: 'app/users/index.html',
    controller: 'MainCtrl'
  })
  .when('/users/add', {
    templateUrl: 'app/users/add-user.html',
    controller: 'AddUserCtrl'
  })
  .when('/users/:userid', {
    templateUrl: 'app/users/user.html',
    controller: 'UserCtrl',
    resolve: {
      user: function ($route, User) {
        return User.get({ userid: $route.current.params.userid }).$promise;
      }
    }
  });
})
/*
.factory('User', function ($cacheFactory, $resource) {
  var User = $resource('/users/:userid', {}, {
    get: { cache: true, method: 'get' }
  });
  return User;
})*/

.controller('MainCtrl', function ($scope, User) {
  $scope.users = User.query();
})

.controller('UserCtrl', function ($scope, user, User, $location) {
  $scope.user = user;
  $scope.remove = function () {
    User.remove({ userid: user.id });
    $location.path('/users');
  };
})

.controller('AddUserCtrl', function ($scope, User, $location) {
  $scope.save = function () {
    var user = new User({
      name: $scope.name,
      job: $scope.job
    })
    user.$save();
    $location.path('/users');
  };
})
;
})();