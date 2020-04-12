// var db = require('../db');
var Product = require('../models/product.model')

module.exports.productList = async function(req, res) {
	// var page = req.query.page || 1;
	// var perPage = 6;
	// var begin = (page - 1)*perPage;
	// var end = page*perPage;
	// res.render('products/index', {
	// 	products: db.get('products').value().slice(begin, end)
	// 	// products: db.get('products').drop('start').take('perPage').value()
	// })
	var products = await Product.find();
	res.render('products/index', {
		products: products
	});
}