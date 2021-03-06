var Task = function(name){
    this.name = name;
    this.completed = false;

    this.complete = function(){
        console.log("Completing task: " + this.name);
        this.completed = true;
    }
    this.save = function(){
        console.log("saving Task: " + this.name);   
    }
}
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
};
var task1 = new Task("create a demo for constructors");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletones");
var task4 = new Task("create a demo for prototype");

task1.complete();
task2.save();
task3.save();
task4.save();

// Attaching properties and methods to prototype Object
// Dot notation
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name)//Output: Ashwin
// Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26
console.log(Human.prototype);

// Example
//Create an empty constructor function
function Person(){

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}
//Create an object using the Person constructor function
var person1 = new Person();
//Access the name property using the person object
console.log(person1.name)// Output" Ashwin