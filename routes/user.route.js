var express = require('express');
var router = express.Router();

// controllers
var controller = require('../controllers/user.controller');

router.get('/', controller.userList);

router.get('/search', controller.searchUsers)

router.get('/create', controller.createUI)
	
router.get('/:id', controller.viewUser)

router.post('/create', controller.createUser)

module.exports = router;