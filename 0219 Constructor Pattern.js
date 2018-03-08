/// My Object has now 2 string method that will pass param1&2
// "new" keyword

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function(){
        return this.param1 + " " + this.param2;
    }
}

// Constructor function
/*
The prototype object has a constructor property which points back to the Human constructor function. Let’s see an example below:
*/

function Human(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");

console.log(Human.prototype)