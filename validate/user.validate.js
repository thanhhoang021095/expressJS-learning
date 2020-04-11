module.exports.createUser = function(req, res, next) {
	var errors = [];
	var values = req.body;
	if(!req.body.name) {
		errors.push("Please type your name");
	}
	if(!req.body.phone) {
		errors.push("Please type your phone number");
	}
	if(errors.length) {
		res.render('users/create', {
			errors: errors,
			values: values
		})
		return;
	}
	res.locals.validInfo = true;
	next();
}