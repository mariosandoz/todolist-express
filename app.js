var express = require('express');
var app = express();
var router = require('./router');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.listen(3000,function(){
	console.log("Backend app is listening to port 3000");
});