var db = require('../db');

module.exports.addToCart = function(req, res, next) {
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;
	if(!sessionId) {
		res.render('/products');
		return
	}
	var sessionData = db.get('session')
	var count = 
	db.get('session')
		.find({id: sessionId})
		.get('cart.' + productId, 0)
		.value();
	
	db.get('session')
		.find({id: sessionId})
		.set('cart.' + productId, count + 1)
		.write()

	// var cartObj = db.get(session).cart;	
	// res.locals.cartLength = function() {
 //    	var size = 0, key;
 //    	for (key in cartObj) {
 //    	    if (cartObj.hasOwnProperty(key)) size++;
 //    	}
 //    	return size;
	// };	
	res.redirect('/products');
}