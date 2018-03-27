var Task = require("C:\\Users\\adam.piskorek\\Documents\\JS\\CodingYear\\0220 task.js\\task.js");
var Repo = require("C:\\Users\\adam.piskorek\\Documents\\JS\\CodingYear\\0220 task.js\\taskRepository.js")

var task1 = new Task(Repo.get(1));
/*
var task1 = new Task("create a demo for constructors");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletones");
var task4 = new Task("create a demo for prototype");
*/
var task1 = new Task({name: "create a demo for constructors"});
var task2 = new Task({name: "create a demo for modules"});
var task3 = new Task({name: "create a demo for singletones"});
var task4 = new Task({name: "create a demo for prototype"});

task1.complete();
task2.save();
task3.save();
task4.save();
////