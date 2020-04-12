var db = require('../db');
var userData = db.get('users').value();
var shortid = require('shortid')

module.exports.userList = function(req, res) {
	res.render('users/index', {
	users: userData
	})
}

module.exports.searchUsers = function(req, res) {
	var q = req.query.q;
	var matchName = userData.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
	})
	res.render('users/index', {
		users : matchName,
	})
} 
module.exports.createUI = function(req, res) {
	res.render('users/create')
}
module.exports.createUser = function(req, res) {
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split('\\').slice(1).join('/');
	db.get('users').push(req.body).write();
	if(res.locals.validInfo) {
		res.redirect('/users')
	}
}
module.exports.viewUser = function(req, res) {
	var id = req.params.id;
	var user = db.get('users').find({ id: id }).value();
	
	res.render('users/view', {
		user: user
	})
}
