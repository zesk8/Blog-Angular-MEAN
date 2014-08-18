'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Blog = new Module('blog');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Blog.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Blog.routes(app, auth, database);

  //We are adding a link to the main menu for all users
  Blog.menus.add({
    'title': 'Posts',
    'link': 'all blog list'
  });
  Blog.menus.add({
    'title': 'Crear nuevo post',
    'link': 'add blog list'
  });

  return Blog;
});
