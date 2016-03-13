var jade = require('jade');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '../public'));

app.use(express.static('views'));
app.use(express.static('public'));
app.set('view engine', 'jade');
app.get('/', function (req, res) {

});

app.get('/arroz', function (req, res) {
	res.render('views/index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {});
