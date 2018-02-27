var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says " + line)
};
rabbit.speak("Fuck that!");
/*
Usually a method needs to do something with the object it was called
on. When a function is called as a method—looked up as a property and
immediately called, as in object.method()—the special variable this in its
body will point to the object that it was called on.
*/

function speak(line){
    console.log("The " +  this.type + " rabbit says " + line)
}
var whiteRabbit = {type: "white", speak:speak};
var blackRabbit = {type: "black", speak:speak};
whiteRabbit.speak("Oh my ears and whiskers " + " how late its geetting");
speak.apply(whiteRabbit, ["Oh my"]);
speak.call({type: "white"}, "Oh my");

//////////////////////////////////
// Watch closely

var empty = {};
console.log(empty.toString)
console.log(empty.toString())

console.log(Object.getPrototypeOf({}) == Object.prototype)  
/*
Many objects don’t directly have Object.prototype as their prototype,
but instead have another object, which provides its own default properties.
Functions derive from Function.prototype, and arrays derive from Array.prototype.
*/
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

/*
The Object.getPrototypeOf function obviously returns the prototype of
an object. You can use Object.create to create an object with a specific
prototype.
*/
var protoRabbit = {
    speak: function(line){
        console.log("Hey " + this.type + "and I say fuck that")
    },
    die: function() {
        console.log("I dont want to die but as you wish")
    }
}

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "I'm angry type "
killerRabbit.speak("GO GET my armor")
killerRabbit.die()