'use strict';

/* Dependencies */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BlogSchema = new Schema({
	created: {
	    type: Date,
	    default: Date.now
	},
	title: {
	    type: String,
	    required: true,
	    trim: true
	},
	content: {
	    type: String,
	    required: true,
	    trim: true
	}
});

/**
 *	 Validations
 */
BlogSchema.path('title').validate(function(title){
	return !!title;
}, 'El titulo no puede estar vacio');

BlogSchema.path('content').validate(function(content){
	return !!content;
}, 'El contenido no puede estar vacio');

/**
 * Statics
 */
BlogSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Blog', BlogSchema);