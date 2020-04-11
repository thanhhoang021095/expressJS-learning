
require('dotenv').config()
var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
// routes
var userRoutes = require('./routes/user.route');
var authRoutes = require('./routes/auth.route');

// controller
var mainController = require('./controllers/main.controller')

// middlewares
var authMiddleware = require('./middlewares/auth.middleware')

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))
app.use(cookieParser(process.env.SESSION_SECRET))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', mainController.index);

app.use('/users', authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)


app.listen(port, () => console.log("Server is running at port " + port ))