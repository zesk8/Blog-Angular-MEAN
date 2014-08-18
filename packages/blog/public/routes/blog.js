'use strict';

angular.module('mean.blog').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    	.state('all blog list', {
    		url: '/blog',
    		templateUrl: 'blog/views/index.html'
    	})
    	.state('add blog list', {
      		url: '/blog/create',
      		templateUrl: 'blog/views/create.html'
    	})
      .state('edit post', {
        url: '/blog/:blogId/edit',
        templateUrl: 'blog/views/edit.html',
      })
      .state('blog by id',{
        url: '/blog/:blogId',
        templateUrl: 'blog/views/view.html'
      });
  }
]);
