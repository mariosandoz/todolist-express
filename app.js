var express = require('express');
var app = express();
var router = require('./router');

app.use('/', router);

app.listen(3000,function(){
	console.log("Backend app is listening to port 3000");
});