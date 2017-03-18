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
		Todolist.find({'completed':false,'deleted':false},(err,todolist)=>{
			if(err) throw err;
			var result = {
				message:err,
				todoresult:todolist
			};
			res.send(this.formatData(result));
		});
	},
	getCompletedTasks:function(req,res){
		Todolist.find({'completed':true,'deleted':false},(err,todolist)=>{
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
				title.push({
						id:element._id.toString(),
						title:element.title});
			});
		}
		return title;
	},
	update:function(req,res){
		Todolist.findByIdAndUpdate(req.body.id,{'completed':req.body.status},(err,todolist)=>{
			if(err) throw err;
			console.log('Update task with id:'+req.body.id);
		});
		res.redirect('/');
	},
	delete:function(req,res){
		Todolist.findByIdAndUpdate(req.body.id,{'deleted':req.body.delete},(err,todolist)=>{
			if(err) throw err;
			console.log('Delete task with id:'+req.body.id);
		});
		res.redirect('/');
	}
};

module.exports = todoListController;