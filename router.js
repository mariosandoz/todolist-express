var express = require('express');
var router = express.Router();
var todoController = require('./Http/Controller/todolistController');

//middleware
router.use(function timeLog (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 
	console.log('Time: ', Date.now())
	next();
})

//incomplete tasks
router.get('/',(req,res)=>{
	todoController.helloWorld(req,res);
});

//incomplete tasks
router.get('/tasks',function(req,res){
	res.status(200).json({
		'incomplete':['buying groceries','expressjs backend'],
		'completed'	:['initial backend without mongo'],
	});
});

//save new 
router.post('/new',(req,res)=>{
	todoController.newTask(req,res);
});


//get incomplete tasks
router.get('/incomplete',(req,res)=>{
	todoController.getIncompleteTask(req,res);
});

module.exports = router;