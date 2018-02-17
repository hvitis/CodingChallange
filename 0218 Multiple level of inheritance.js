////////////////////////////////////
// Multiple level of inheritance
// all the code works on:
// http://plnkr.co/edit/J81EK3TWFof0ekhEnyiJ?p=preview
'use strict';
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 4
var Fluffy = new Cat('Fluffy', 'White')

display(Fluffy.__proto__)
display(Fluffy.__proto__.__proto__)
display(Fluffy.__proto__.__proto__.__proto__)
// last one gives null

//////////////////////////////////////

function Animal() {}

Animal.prototype.speak = function(){
    display('Grunt....!')
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// we dont use 'new' because we don't want to call a function
// it's not proffessional since we just want to create a prototype
Cat.prototype = Object.create(Animal.prototype)

var Fluffy = new Cat('Fluffy', 'White')

//////////////////////////////////////////
function Animal() {}
Animal.prototype.speak = function(){
    display('Grunt....!')
}
function Cat(name, color) {
    Animal.call(this)
    this.name = name;
    this.color = color;
}
// we dont use 'new' because we don't want to call a function
// it's not proffessional since we just want to create a prototype
Cat.prototype = Object.create(Animal.prototype)

var Fluffy = new Cat('Fluffy', 'White')
