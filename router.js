var express = require('express');
var router = express.Router();

//middleware
router.use(function timeLog (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 
	console.log('Time: ', Date.now())
	next();
})

//incomplete tasks
router.get('/',function(req,res){
	res.send('Hello API');
});

//incomplete tasks
router.get('/tasks',function(req,res){
	res.status(200).json({
		'incomplete':['buying groceries','expressjs backend'],
		'completed'	:['initial backend'],
	});
});

module.exports = router;