var app = require('./app');

var server = module.exports = app.listen('3000', function() {
	console.log('Lekker demo server started with address', server.address());
});