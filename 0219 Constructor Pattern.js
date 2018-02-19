/// My Object has now 2 string method that will pass param1&2
// "new" keyword

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function(){
        return this.param1 + " " + this.param2;
    }
}


