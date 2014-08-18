'use strict';

angular.module('mean.blog').controller('BlogController', ['$scope', '$stateParams', '$location', 'Global', 'Blog',
  function($scope, $stateParams, $location, Global, Blog) {
    $scope.global = Global;

    $scope.create = function(){
    	var post = new Blog({
    	   title: this.title,
    	   content: this.content
    	});

    	post.$save(function(response){
    		$location.path('blog');
    	});
    };

	$scope.all = function() {
		Blog.query(function(posts){
	    	$scope.posts = posts;
	    });
	};

	$scope.findPost = function() {
		Blog.get({
			blogId: $stateParams.blogId
		}, function(post) {
			$scope.post = post;
		});
	};

	$scope.remove = function(post) {
		if (post) {
			post.$remove();
			for (var i in $scope.posts) {
				if ($scope.posts[i] === post) {
					$scope.posts.splice(i, 1);
				}
			}
		} else {
			$scope.post.$remove(function(response) {
				$location.path('blog');
			});
		}
	};

	$scope.update = function() {
		var post = $scope.post;

		post.$update(function() {
			$location.path('blog/' + post._id);
		});
	};

  }
]);
