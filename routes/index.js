module.exports = function(app) {
	/* GET */
	app.route('/').get(function(req, res, next) {
		res.render('index', {
			title : 'Express'
		});
	});
};
