var express = require('express');
var router = express.Router();
// controllers
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

router.get('/cookie', function(req, res) {
	res.cookie('uid', 1123);
	res.send('cookie test')
})
router.get('/', controller.userList);

router.get('/search', controller.searchUsers)

router.get('/create', controller.createUI)
	
router.get('/:id', controller.viewUser)

router.post('/create', validate.createUser, controller.createUser)

module.exports = router;