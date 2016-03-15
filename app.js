var jade = require('jade');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	res.render('views/index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/arroz', function (req, res) {
	res.render('views/index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {});
