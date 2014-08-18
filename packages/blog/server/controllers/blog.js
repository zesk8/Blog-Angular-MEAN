'use strict';

/**
 *	Dependencies
 */
var mongoose = require('mongoose'),
	Blog = mongoose.model('Blog'),
	_ = require('lodash');

/**
 * Create new post
 */
exports.create = function(req, res) {
	var post = new Blog(req.body);
	//console.log(req.body);
	post.save(function(err) {
		if (err) {
			return res.json(500, {
		        error: 'No se puede guardar el post'
		    });
		}
		res.json(post);
	});
};

/**
 * Display a post
 */
exports.read = function(req, res) {
	res.json(req.post);
};

/**
 * Update a post
 */
exports.update = function(req, res) {
	var post = req.post;
	
	post = _.extend(post, req.body);

	post.save(function(err) {
		if (err) {
			return res.json(500, {
				error: 'No se puede actualizar el post'
			});
		}
		res.json(post);
	});
};

/**
 * Delete a post
 */
exports.delete = function(req, res) {
	var post = req.post;

	post.remove(function(err){
		if (err) {
			return res.json(500, {
				error: 'No se puede borrar el post'
			});
		}
		res.json(post);
	});
};

/**
 * Find post by id
 */
exports.findPost = function(req, res, next, id) {
	Blog.load(id, function(err, post) {
		if (err) return next(err);
		if (!post) return next(new Error('Error al cargar post ' + id));
		req.post = post;
		next();
	});
};

/**
 * Display all post
 */
exports.all = function(req, res) {
	Blog.find().exec(function(err, posts){
		if (err) {
	      return res.json(500, {
	        error: 'No se pueden listar los posts'
	      });
	    }
		res.json(posts);
	});
};
