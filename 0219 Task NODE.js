// We're creating task constructor just by creating an Object

var Task = function(name){
    this.name = name;
    this.completed = false;

    this.complete = function(){
        this.completed = true;
    }
    this.save = function(){
        console.log("saving Task: " + this.name);   
    }
}

var task1 = new Task("create a demo for constructors");
var task1 = new Task("create a demo for modules");
var task1 = new Task("create a demo for singletones");
var task1 = new Task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();