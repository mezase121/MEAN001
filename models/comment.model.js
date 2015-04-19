var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	author : User,
	text : String,
});

mongoose.model('Comment', CommentSchema);