var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  
});

app.listen(3000, function () {});
