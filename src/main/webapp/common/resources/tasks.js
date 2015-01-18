(function () {

	angular.module('resource.tasks', ['ngResource'])
//	.factory('Tasks', function ($cacheFactory, $resource) {
//	  var Tasks = $resource('/tasks/:taskid', {}, {
//		get: { cache: true, method: 'get' }
//	  });
//	  return Tasks;
//	});
	.factory('Tasks', function ($cacheFactory, $resource) {
		  var Tasks = $resource('api/user/:userId', {}, {
			  query: { cache: true, method: 'get', params:{userId:'all'}, isArray:true }
		  });
		  return Tasks;
		});
	
}());
