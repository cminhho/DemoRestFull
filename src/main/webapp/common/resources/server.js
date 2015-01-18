(function () {

	angular.module('resource.server', ['ngResource'])
	.factory('Server', function($resource) {
        return $resource('api/server/:serverId' , {} , {
            query: {method:'GET', params:{serverId:'all'}, isArray:true},
            queryPaging: {method: 'GET', params: {start: 'start', max: 'max'}, isArray:true},
            update: {method:'PUT'},
            save: {method:'POST'}
        });
    })
}());