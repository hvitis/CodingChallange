///////////////////////////////
/// Inheritance
///////////////////////////////
var task = {
    title: "My title in curly braces",
    description: "My description in curly braces",
};

Object.defineProperty(task, "toString", {
  value: function(){
    return this.title + " " + this.description;
  },
  writable: true,  // true or false zmienia wynik na aaaand albo "  "
  enumerable: false, 
  configurable: false,
});

task.toString = function() {
    return this.title + " aaaand " + this.description;
}
console.log(task.toString());


var urgentTask = Object.create(task);
console.log(task.toString());

Object.defineProperty(urgentTask, "toString", {
    value: function(){
      return this.title + " is urgent!";
    },
    writable: false,
    enumerable: false, 
    configurable: false,
  });
  console.log(urgentTask.toString());