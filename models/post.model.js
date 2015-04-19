var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('mongoose').model('User');
var Comment = require('mongoose').model('Comment');

var Postchema = new Schema({
	author : ObjectId,
	text : String,
	comments : [ Comment ],
});

mongoose.model('Post', Postchema);