var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	var user = new User(req.body);
	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.user);
};

exports.edit = function(req, res, next) {
	var query = {
		_id : req.user.id
	};
	User.update(query, {
		name : "Updated"
	}, {
		multi : false
	}, function(err, numAffected) {
		User.find({
			_id : req.user.id
		}, function(err, users) {
			if (err) {
				return next(err);
			} else {
				res.json(users);
			}
		});
	});
};

exports.userById = function(req, res, next, id) {
	console.log("asdasdads");
	User.findOne({
		_id : id,
	}, function(err, user) {
		if (err) {
			return next(err);
		} else {
			req.user = user;
			next();
		}
	});
};

exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};