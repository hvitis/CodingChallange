var test = {
    prop: 10,
    addPropTo: function(array) {
        return array.map(function(elt) {
            return this.prop + elt;
        }.bind(this));
    }
}
console.log(test.addPropTo([5]))



// How .bind function works
/* 
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
*/
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  
  var retrieveX = module.getX;
  console.log(retrieveX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = retrieveX.bind(module);
  console.log(boundGetX());
  // expected output: 42