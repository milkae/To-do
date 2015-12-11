
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname));

var tab = {};
var user = '';

app.post('/todo.html', function (req, res) {
	user = req.body.user;
	if(!tab[user]){
		tab[user] = [];
	}
	res.redirect("/todo.html");
});

app.get('/todos', function (req, res) {
	res.json(tab[user]);
});

app.post('/todos', function (req, res) {
	var item = req.body.item;
	tab[user].push(item);
	res.send(item);
});

app.delete('/todos', function (req, res) {
	var item = req.query.item;
	tab[user].splice(tab[user].indexOf(item), 1);
	res.send();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});