// Objekty //

'use strict';

var cat = {name: "Fluffy", color: "White"};
cat.age = 3
//display(cat.age)
cat.speak = function() { display("Meeoooow")}
cat.speak()

///////////////////////////////////////
// Another way to create Obj

var cat = Object.create(Object.prototype,
    {
      name:{
        value:'Fluffy',
        enumerable:true,
        writable:true,
        configurable:true
      },
      color:{
        value:'Brownie',
        enumerable:true,
        writable:true,
        configurable:true
      },
      
    })
    display(cat)

///////////////////////////////////////
// // Oter way to create classes

class Cat {
    constructor(name, color) {
      this.name = name,
      this.color = color
    }
    speak(){
      display('Meeeoooow')
    }
    
  }
  
  var cat = new Cat("Mike", "Blue")
  display(cat)
  cat.speak()

// Object constructor
  function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
// 