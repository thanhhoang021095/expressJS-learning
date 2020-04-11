var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
	if (!req.signedCookies.uid) {
		res.redirect('/auth/login');
		return
	}
	var user = db.get('users').find({id: req.signedCookies.uid}).value();
	if (!user) {
		res.redirect('/auth/login');
		return;
	}
	res.locals.user = user
	next();
}