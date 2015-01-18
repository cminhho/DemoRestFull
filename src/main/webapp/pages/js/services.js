'use strict';

/* Services */

angular.module('musicManager.songServices', ['ngResource'])
    .factory('Song', function($resource) {
        return $resource('resources/song/:songId' , {} , {
            query: {method:'GET', params:{songId:'all'}, isArray:true},
            queryPaging: {method: 'GET', params: {start: 'start', max: 'max'}, isArray:true},
            update: {method:'PUT'}
        });
    })
    .factory('User', function($resource) {
        return $resource('api/user/:userId' , {} , {
            query: {method:'GET', params:{userId:'all'}, isArray:true},
            queryPaging: {method: 'GET', params: {start: 'start', max: 'max'}, isArray:true},
            update: {method:'PUT'}
        });
    })
    .controller('User')
    
