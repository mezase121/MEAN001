module.exports = function(app) {

	/* GET */
	app.route('/profile/:userId').get(function(req, res, next) {
		res.render('profile', {
			title : 'Express',
			username : req.user.username,
			email : req.user.email,
		});
	});
};
