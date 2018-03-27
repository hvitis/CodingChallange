var todoList = [];
function rememberTo(task) {
    return todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}

function urgentlyRememberTo (task) {
    return todoList.unshift(task);
}

rememberTo('Wash the dishes');
rememberTo('Take the camera');
console.log(todoList);
whatIsNext()
console.log(todoList);
urgentlyRememberTo('front')
console.log(todoList);

/////////////////////////////////////
/// Other useful methods

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index+1));
    // the same here
    // .concat(array.slice(index+1));
}
console.log(remove([1,2,3,4,5,6], 3))


////////////////////////////////////
// Global variables
/*
In browsers, the global scope object is stored
in the window variable.
soo.... this >>>>>
var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);

works only in a browser
*/