console.log("Starting app");

setTimeout(() => {
    console.log("Inside of callback");
}, 2000)

var y = 5;
setTimeout(() => {
    console.log(`Second callback with ${y}`);
}, 0)


console.log("Finishing app");