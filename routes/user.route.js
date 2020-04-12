var express = require('express');
// upload file
var multer  = require('multer')
// controllers
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var upload = multer({ dest: './public/upload/' })

var router = express.Router();

router.get('/cookie', function(req, res) {
	res.cookie('uid', 1123);
	res.send('cookie test')
})
router.get('/', controller.userList);

router.get('/search', controller.searchUsers)

router.get('/create', controller.createUI)
	
router.get('/:id', controller.viewUser)

router.post('/create', 
	upload.single('avatar'), 
	validate.createUser, 
	controller.createUser)

module.exports = router;