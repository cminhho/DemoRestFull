(function () {

	angular.module('resource.users', ['ngResource'])
	.factory('User', function ($cacheFactory, $resource) {
	  var User = $resource('/users/:userid', {}, {
		get: { cache: true, method: 'get' }
	  });
	  return User;
	})
	.factory('User2', function($resource) {
        return $resource('api/user/:userId' , {} , {
            query: {method:'GET', params:{userId:'all'}, isArray:true},
            queryPaging: {method: 'GET', params: {start: 'start', max: 'max'}, isArray:true},
            update: {method:'PUT'}
        });
    })

	
}());