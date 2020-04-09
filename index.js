var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var userRoutes = require('./routes/user.route');
var mainController = require('./controllers/main.controller')

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', mainController.index);

app.use('/users', userRoutes)


app.listen(port, () => console.log("Server is running at port " + port ))