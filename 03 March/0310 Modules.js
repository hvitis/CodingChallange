/* some function from the web
function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
    };
randomColor()
*/


var dayName = function () {
  var names = ["Sunday", "Monday", "Tuesday", "etc"]
  return function (number){
    return names[number];
  };
}();

console.log(dayName(1))
// names is not defined  console.log(names[1])

var weekDay = function() {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return {
    name: function(number) { return names[number]; },
    number: function(name) {return names.indexOf(name); }
  };
}();

console.log(weekDay.name(weekDay.number("Sunday")));
/*
Exporting function
( f u n c t i o n ( e x p o r t s ) {
var names = [" S u n d a y " , " M o n d a y " , " T u e s d a y " , " W e d n e s d a y " ,
" T h u r s d a y " , " F r i d a y " , " S a t u r d a y "];
e x p o r t s . name = f u n c t i o n ( n u m b e r ) {
r e t u r n names [ n u m b e r ];
};
e x p o r t s . n u m b e r = f u n c t i o n ( name ) {
r e t u r n names . i n d e x O f ( name ) ;
};
}) ( this . w e e k D a y = {}) ;
c o n s o l e . log ( w e e k D a y . name ( w e e k D a y . n u m b e r (" S a t u r d a y ") ) ) ;
// ! S a t u r d a y
*/