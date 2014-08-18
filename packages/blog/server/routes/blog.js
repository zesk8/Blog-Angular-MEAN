'use strict';

var posts = require('../controllers/blog');
// The Package is past automatically as first parameter
module.exports = function(Blog, app, auth, database) {

  app.route('/blog')
    .get(posts.all)
    .post(posts.create);

  app.route('/blog/:blogId')
    .get(posts.read)
    .put(posts.update)
    .delete(posts.delete);

  app.param('blogId', posts.findPost);
};
