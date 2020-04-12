var express = require('express');
var router = express.Router();
// controllers
var controller = require('../controllers/product.controller');

router.get('/', controller.productList);

module.exports = router;