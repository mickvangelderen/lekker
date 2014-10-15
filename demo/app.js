var express = require('express');
var path = require('path');
var lessMiddleware = require('less-middleware');

var app = module.exports = express();

app.set('views', path.join(__dirname, 'jade'));
app.set('view engine', 'jade');

app.use('/modules/demo', lessMiddleware(path.join(__dirname, 'less'), {
	force: true,
	dest: path.join(__dirname, 'public/modules/demo'),
	parser: {
		paths: [
			path.join(__dirname, 'less'),
			path.join(__dirname, '../..') // normally you would refer to your bower folder here
		]
	}
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/flex', function(req, res) { res.render('pages/flex'); });
app.get('/set', function(req, res) { res.render('pages/set'); });
app.get('/', function(req, res) { res.render('pages/index'); });
