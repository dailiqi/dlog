var express = require('express');
var path = require('path');
require('browserify')
var port = process.env.PORT || 8000;
var app = express();

app.set('views' , './views');
app.set('view engine' , 'jade');
app.use('/static',express.static(path.join(__dirname, 'static')));
app.listen(port);

console.log('server start on ' + port);

// app.get('/static', function ( req,res) {

// })

// idnex page
app.get('/' , function(req,res) {
	res.render('index', {
		title: 'dlog 标题',
		name: 'tj',
		email: 'tj@vision-media.ca'
	});
});