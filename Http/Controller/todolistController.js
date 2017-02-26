var Todolist = require('./../Model/model');

var todoListController = {
	helloWorld : function(req, res){
		res.send('Hellomoto');
	},
	newTask:function(req, res){
		var newTodoList = Todolist({
			title:req.body.todo,
			priority:"low",
			deleted:false,
		});

		newTodoList.save((err)=>{
			if(err) throw err;
			console.log('New to do list saved');
		});
		
		res.redirect('/');
	}
};

module.exports = todoListController;