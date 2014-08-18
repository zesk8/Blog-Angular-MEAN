'use strict';

angular.module('mean.blog').factory('Blog', ['$resource',
  	function($resource) {
	    return $resource('blog/:blogId', {
	      	blogId: '@_id'
	    }, {
	      	update: {
	        	method: 'PUT'
	      	}
	    });
  	}
]);
