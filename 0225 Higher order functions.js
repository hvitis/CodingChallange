// Without higher order
var array = [1,2];
for (var i = 0; i < array.length; i++)
    var current = array[i];
    //console.log(current);

// With higher order
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
};
//forEach(array, console.log)

// Examples of interesting functions
function unless(test, then) {
    if (!test) then();
};

function repeat(times, body) {
    for (var i = 0; i <= times; i++) body(i);
};

repeat(10, function(n) {
    unless(n%2, function() {
    console.log(n, "is even");
    });
});