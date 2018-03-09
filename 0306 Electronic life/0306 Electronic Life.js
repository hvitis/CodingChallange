// ELECTRONIC LIFE PROJECT

var plan = [ 
    "############################" ,
    "#          ## #            #" ,
    "#                          #" ,
    "#####        ####         ##" ,
    "##    ##                 ###" ,
    "###         o           ####" ,
    "###     #####            ###" ,
    "##              #       ####" ,
    "###                        #" ,
    "#     #                 ####" ,
    "##                         #" ,
    "############################" ];
// Grid Programming interface
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
 };
 
function Grid(width, height) {
    this.space = new Array(width * height);
    this.width = width;
    this.height = height;
}
Grid.prototype.isInside = function(vector) {
    return vector.x >= 0 && vector.x < this.width &&
           vector.y >= 0 && vector.y < this.height;
};
Grid.prototype.get = function(vector, value) {
    return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function(vector, value) {
    return this.space[vector.x + this.width * vector.y] = value;
};
Grid.prototype.forEach = function(f, context) {
    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var value = this.space [ x + y * this.width];
            if (value != null)
            f.call(context, value, new Vector(x, y));
        }
    }
}
// Critter´s Programming interface
var directions = {
    "n": new Vector(0, -1),
    "ne": new Vector(1, -1),
    "e": new Vector(1, 0),
    "se": new Vector(1, 1),
    "s": new Vector(0, 1),
    "sw": new Vector(-1 ,1),
    "w": new Vector(-1, 0),
    "nw": new Vector(-1, -1)
};

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
var directionNames = "n ne e se s sq q nw".split(" ");

function BouncingCritter(){
    this.direction = randomElement(directionNames);
};
BouncingCritter.prototype.act = function(view) {
    if (view.look(this.direction) != " ")
        this.direction = view.find(" ") || "s";
    return { type: "move", direction: this.direction };
};
function elementFromChar (legend, ch) {
    if (ch == " ")
        return null;
    var element = new legend[ch]();
    element.originChar = ch;
    return element;
}

function World(map, legend) {
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line, y){
        for (var x = 0; x < line.length; x++)
        grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
    });
}
function charFromElement(element) {
    if (element == null)
        return " ";
    else
        return element.originChar;    
}
/*
Each function call gets
its own this binding, so the this in the inner function does not refer to
134
the newly constructed object that the outer this refers to. In fact, when
a function isn’t called as a method, this will refer to the global object.
*/

World.prototype.toString = function () {
    var output = "";
    for (var y = 0; y < this.grid.height; y++) {
        for (var x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new Vector(x, y));
            output += charFromElement(element)
        }        
        output += "\n";
    }
    return output
};

//console.log(plan)
function Wall() {}
var world = new World (plan, {"#": Wall,
                              "o": BouncingCritter});
//console.log(world.toString());
//_________________________________________________________________

World.prototype.turn = function() {
    var acted = [];

    this.grid.forEach(function(critter, vector) {

        if (critter.act && acted.indexOf(critter) == -1) {
  
            acted.push(critter);
            this.letAct(critter, vector);
        }

    }, this);
};

World.prototype.letAct = function(critter, vector) {
    var action = critter.act(new View(this, vector));
    if (action && action.type == "move") {
        var dest = this.checkDestination(action, vector);
        if (dest && this.grid.get(dest) == null) {
            this.grid.set(vector, null);
            this.grid.set(dest, critter);
        }
    }
};

World.prototype.checkDestination = function(action, vector) {
    if (directions.hasOwnProperty(action.direction)) {
        var dest = vector.plus(directions[action.direction]);
        if (this.grid.isInside(dest))
            return dest;
    }
};

function View(world, vector) {

    this.world = world;
    this.vector = vector;
    
}

View.prototype.look = function(dir) {

    var target = this.vector.plus(directions[dir]);
    if (this.world.grid.isInside(target))
        return charFromElement(this.world.grid.get(target));
    else
        return "#";
}
View.prototype.findAll = function(ch) {
    var found = [];
    for (var dir in directions)
        if (this.look(dir) == ch)
            found.push(dir);
    return found;
}
View.prototype.find = function(ch) {
    var found = this.findAll(ch);
    if (found.length == 0) return null;
        return randomElement(found);
};
/*
world.turn()
console.log(world.toString())
 */
//world.turn();
//console.log(world.toString());
/*
function gatherMoves (board) {
    var clips = [];
    for (var i = 0; i < 1; i++) {
        board.turn()
        clips.push(board.toString())
    }    
    return clips
};
*/

function gatherMoves (board) {

        board.turn()
        console.log(board.toString()) 

};

function showBoard(clips) {
    return console.log(clips[0])
}

function animate(board) {
    setInterval(function() {gatherMoves(board)}, 60);
}
animate(world)








//____________________________________________________________
/*
var grid = [["top left", "top middle", "top right"], ["bottom left", "bottom middle", "bottom right"]]
console.log(grid[1][1]);
var grid = ["top left", "top middle", "top right", "bottom left", "bottom middle", "bottom right"]
/* 
Or we can use a single array, with size width * height, and decide that
the element at (x,y) is found at position x + (y * width) in the array.

console.log(grid[2 + (1*3)]) // bottom right
console.log(grid[0 + (0*3)]) // top left
console.log(grid[1 + (0*3)]) // top mid
console.log(grid[2 + (0*3)]) // top right
*/


//var grid = new Grid(5,5);
//console.log(grid.get(new Vector(1, 1))); // because grid Get needs 2 parameters to be passed, vector and value
// that´s why we need to sset up the grid first
//grid.set(new Vector(1, 1), "#");
//console.log(grid.get(new Vector(1 , 1)));
