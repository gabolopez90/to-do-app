var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require("mongoose");

//Conectar a la base de datos
mongoose.connect("mongodb://gabo:user@ds117271.mlab.com:17271/to-do");

//Crear un schema - Una especia de plano
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model("Todo", todoSchema);


module.exports = function(app){
    
    app.get("/todo", function(req,res){
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render("todo", {todos: data});
        });
    });
    
    app.post("/todo", urlencodedParser, function(req,res){
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.render("todo", {todos: data});
        });
        
        
    });
    
    app.delete("/todo/:item",function(req,res){
        Todo.find({item : req.params.item.replace(/\-/g," ")}).remove(function(err, data){
            if(err) throw err;
            res.render("todo", {todos: data});
        })
    });
};