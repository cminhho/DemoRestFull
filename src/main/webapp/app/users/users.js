(function(){
angular.module('module.users', ['ngResource', 'ngRoute', 'resource.users'])

.config(function ($routeProvider) {
  $routeProvider
  .when('/users', {
    templateUrl: 'app/users/users.html',
    controller: 'MainCtrl'
  })
  .when('/users/add', {
    templateUrl: 'app/users/add-user.html',
    controller: 'AddUserCtrl'
  })
  .when('/users/:userid', {
    templateUrl: 'app/users/edit-user.html',
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

.controller('MainCtrl', function ($scope, $location, User) {
  $scope.users = User.query();
  $scope.go = function(url){
	$location.path('/users/add');
  };
  
})

.controller('UserCtrl', function ($scope, user, User, $location) {
  $scope.user = user;
  $scope.remove = function () {
    User.remove({ userid: user.id });
    $location.path('/users');
  };
  $scope.save = function(){
	var user = new User({
      username: $scope.username,
	  email: $scope.email,
      job: $scope.job
    })
    user.$save();
    $location.path('/users');
  };
})

.controller('AddUserCtrl', function ($scope, User, $location) {
  $scope.save = function () {
    var user = new User({
      username: $scope.username,
      job: $scope.job
    })
    user.$save();
    $location.path('/users');
  };
})
;
})();