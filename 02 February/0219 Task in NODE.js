// 1.
var task = {};
task.title = "My task";
task.description = "My description";
console.log(task.title);

// 2.
var task = Object.create(Object.prototype);
task.title = "My 2 task ";
task.description = "My 2 description";
console.log(task.title);

// 3.
var task = Object.create(Object.prototype);
task.title = "My 2 task ";
task.description = "My 2 description";
task.toString = function() {
    return this.title + " " + this.description;
}
console.log(task.toString());

// 4. The same with new Obj
var task = new Object();
task.title = "My 2 task ";
task.description = "My 2 description";
task.toString = function() {
    return this.title + " " + this.description;
}
console.log(task.toString());

// 5. Curly braces
var task = {
    title: "My title in curly braces",
    description: "My description in curly braces",
};
task.toString = function() {
    return this.title + " " + this.description;
}
console.log(task.toString());

/// Properties of an object again
var example = {};
Object.defineProperty(example, "exampleName", {
    value: "My name is The example",
    writable: true, // I can create constance
    enumerable: true, // for loop
    configurable: true // not allow to change the config
})

// So basically I can create a value in an object with definingProperty
// but this way I can control the object better
'allow pasting'
var task = {
    title: "My title in curly braces",
    description: "My description in curly braces",
};
/* Now I'm doing that
task.toString = function() {
    return this.title + " " + this.description;
}

but with defineObject 
*/

Object.defineProperty(task, "toString", {
  value: function(){
    return this.title + " " + this.description;
  },
  writable: true,
  enumerable: true, 
  configurable: true,
});
console.log(task.toString());