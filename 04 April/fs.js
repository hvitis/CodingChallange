var fs = require("fs");

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
console.log(greet);

// Watching tutorials at work