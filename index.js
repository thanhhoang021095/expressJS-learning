
require('dotenv').config()
var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var app = express();
var port = process.env.port || 3000;
var bodyParser = require('body-parser');
// routes
var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/product.route');
var cartRoutes = require('./routes/cart.route');
var apiProductRoutes = require('./api/routes/product.route');
// controller
var mainController = require('./controllers/main.controller');

// middlewares
var sessionMiddleware = require('./middlewares/session.middleware');
var authMiddleware = require('./middlewares/auth.middleware');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SESSION_SECRET))

app.use(sessionMiddleware.sessionCookie);
app.use(express.static('public'))

app.get('/', mainController.index);

app.use('/api/products', apiProductRoutes)
app.use('/users', authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)

app.listen(port, () => console.log("Server is running at port " + port ))