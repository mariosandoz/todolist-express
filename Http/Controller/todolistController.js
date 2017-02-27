var Todolist = require('./../Model/model');

var todoListController = {
	helloWorld : function(req, res){
		res.send('Hellomoto');
	},
	newTask:function(req, res){
		var newTodoList = Todolist({
			title:req.body.todo,
			priority:"low",
			completed:false,
			deleted:false,
		});

		newTodoList.save((err)=>{
			if(err) throw err;
			console.log('New to do list saved');
		});
		
		res.redirect('/');
	},
	getIncompleteTask:function(req,res){
		Todolist.find({'completed':false},(err,todolist)=>{
			if(err) throw err;
			var result = {
				message:err,
				todoresult:todolist
			};
			res.send(this.formatData(result));
		});
	},
	formatData:function(arrData){
		var title = [];

		if(arrData.message == null){
			arrData.todoresult.forEach((element)=>{
				title.push(element.title);
			});

		}
		return title;
	}
};

module.exports = todoListController;