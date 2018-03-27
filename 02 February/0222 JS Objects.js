/* But with objects, there is a difference between having two references
to the same object and having two different objects that contain
the same properties. */

var object1 = { value : 10};
var object2 = object1 ;
var object3= { value : 10};