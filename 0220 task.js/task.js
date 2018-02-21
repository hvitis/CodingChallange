var Repo = require("C:\\Users\\adam.piskorek\\Documents\\JS\\CodingYear\\0220 task.js\\taskRepository.js")

//data is a JSON object
var Task = function(data){
    this.name = data.name;
    this.completed = false;
}
/*
    this.complete = function(){
        console.log("Completing task: " + this.name);
        this.completed = true;
    }
    this.save = function(){
        console.log("saving Task: " + this.name);   
    }
}

*/
/* How to do that - a template:
ClassnName.prototype.methodName = function (arguments){};
*/
Task.prototype.complete = function (){
    console.log("Completing task: " + this.name);
    this.completed = true;
    /* We have our Task prototype.
    Now everytime I create a new copy of Task, I´m not creating 
    a copy of a complete function. That complete function exists in one place in
    the prototype and all of task copies have access to that options but they don´t have a 
    copy of it.
    */
};

Task.prototype.save = function (){
    console.log("saving Task: " + this.name); 
    Repo.save(this);
};

module.exports = Task;