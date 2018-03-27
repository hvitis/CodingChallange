

//////////////////////////
// Examples
//.1
var obj = {};

//.2
//This one to use inheritance etc.
var nextObj = Object.create(Object.prototype);

//.3
var lastObj = new Object();


//////////////////////////
// Creation
//.1
var obj = {};
obj.param = "Appears on console correctly";
console.log(obj.param); // new value

// alternative to 1.
var obj2 = {};
obj2["param"] = "Also appears on the console";
console.log(obj["param"]);

// regarding alternative 1 - you can you values in brackets
var val = "using value as a variable";
//obj2["param"] = val
//console.log(obj2["param"]);
obj2[val] = "using value as a key";
console.log(obj2[val]);

console.log("//////////////////////");
var obj = {};
var val = "using val as a properties"
obj2["some property"] = val;
console.log(obj2["some property"]);
