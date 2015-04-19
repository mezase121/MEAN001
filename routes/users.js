var users = require('../controllers/users.controller');

module.exports = function(app) {

	/** VIEWS **/

	/** ACTIONS **/

	/* Parameters */
	app.param('userId', users.userById);

	/* GET */
	app.route('/users').get(users.list);
	app.route('/users/:userId').get(users.read);

	/* PUT */
	app.route('/users/edit/:userId').put(users.edit);

	/* POST */
	app.route('/users/create').post(users.create);
};