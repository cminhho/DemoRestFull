(function () {

	angular.module('resource.template', ['ngResource'])

	.factory('Template', function ($cacheFactory, $resource) {
		  var Tasks = $resource('api/template/:templateId', {}, {
			  query: { cache: true, method: 'get', params:{templateId:'all'}, isArray:true }
		  });
		  return Tasks;
		});
	
}());
