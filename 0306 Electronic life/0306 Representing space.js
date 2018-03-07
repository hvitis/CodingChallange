// ELECTRONIC LIFE PROJECT

function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

var grid = [["top left", "top middle", "top right"], ["bottom left", "bottom middle", "bottom right"]]
console.log(grid[1][1]);
var grid = ["top left", "top middle", "top right", "bottom left", "bottom middle", "bottom right"]
/* 
Or we can use a single array, with size width * height, and decide that
the element at (x,y) is found at position x + (y * width) in the array.
*/
console.log(grid[2 + (1*3)]) // bottom right
console.log(grid[0 + (0*3)]) // top left
console.log(grid[1 + (0*3)]) // top mid
console.log(grid[2 + (0*3)]) // top right

function Grid(width, height) {
    this.space = new Array(width*height);
    this.width = width;
    this.height = height;
}
// console.log(new Grid(5,4));
Grid.prototype.isInside = function(vector) {
    return vector.x >= 0 && vector.x < this.width &&
           vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector, value) {
    return this.space[vector.x + this.width * vector.y];
};