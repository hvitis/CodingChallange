////////////////////////////////
// Prototypes and Inheritance
////////////////////////////////

/////////////////////////////////
// Prototypes

'use strict';
var arr = ['Ania', 'Zosia', 'Dżordż'];
var last = arr[arr.length-2];

// Creating a property for an array
Object.defineProperty(arr, 'last', {get: function(){
  return this[this.length-1]
}})
var arr = arr.last;

display(last);

var arr2 = ['Siema', 'Czesc', 'Hejka'];
display(arr2.last) // It doesn't show up, let's try to remake it
Object.defineProperty(Array.prototype, 'last', {get: function(){
  return this[this.length-1]
}})
display(arr2.last)

////////////////////////////////////
var myFunc = function() {}
display(myFunc.prototype) 

var cat = {name: 'Fluffy'}
display(cat.prototype)
//  Nothing shows up cause Objects dont have prototypes
// But object has a proper property
// Objects prototype and functions prototype are used differently

display(cat.__proto__)

/////////////////////////////////////
'use strict';
function Cat(name, color) {
  this.name;
  this.color;
}

var fluffy = new Cat('Fluffy', 'White');
display(Cat.prototype)
display(fluffy.__proto__)

display(Cat.prototype === fluffy.__proto__)

Cat.prototype.age = 3
display(Cat.prototype)
display(fluffy.__proto__)
// To sum up this affects all Objects constructed by this function
var muffin = new Cat('Muffin','Brown')
display(muffin.__proto__)


////// Changing the properties
'use strict';
function Cat(name, color) {
  this.name;
  this.color;
}

Cat.prototype.age = 3

var fluffy = new Cat('Fluffy', 'White');
var fluffy = new Cat('Stork', 'Brown');

display(fluffy.age)
display(fluffy.age)
// It will change age of all the obejcts
Cat.prototype.age = 4
display(fluffy.age)
display(fluffy.age)

fluffy.age = 5
display(fluffy.age)
display(fluffy.__proto__.age)

//////// 