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
urgentlyRememberTo('Wash the dishes')
console.log(todoList);