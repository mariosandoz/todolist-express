var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://todolist:todolist@ds157829.mlab.com:57829/todolist');

var todolistSchema = new Schema({
	"title": String,
	"priority": String,
	"deleted": Boolean,
});

var Todolist = mongoose.model('todolist',todolistSchema);

module.exports = Todolist;