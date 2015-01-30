'use strict';

/* Services */

angular.module('musicManager.songServices', ['ngResource'])
    .factory('Song', function($resource) {
        return $resource('api/song/:songId' , {} , {
            query: {method:'GET', params:{songId:'all'}, isArray:true},
            queryPaging1: {method: 'GET', isArray:false},
            queryPaging: {method: 'GET', params: {start: 'start', max: 'max'}, isArray:false},
            update: {method:'PUT'}
        });
    });
