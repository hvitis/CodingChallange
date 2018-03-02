//////////////////////////////////////////
// https://github.com/fhdhsni/The-Secret-Life-of-Objects


// Mapping an array
/*
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
      mapped.push(transform(array[i]));
      return mapped;
  }

// Reduce
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
  };
*/

///////////////////////////////////

var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: null, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];


function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join("  ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
    });
            return blocks[0].map(function(_, lineNo) {
                return drawLine(blocks, lineNo);
    }).join("\n");
}
    return rows.map(drawRow).join("\n");
}


function repeat(string, times) {
    var result = " "
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length)
        }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

var rows = [];
for (var i = 0; i < 10; i++) {
    var row = [];
    for (var j = 0; j < 4; j++) {
        if((j+i) %3 == 0 )
            row.push(new TextCell("###"));
        else
            row.push(new TextCell("   "));        
    }
    rows.push(row);
}
// console.log(drawTable(rows));

function UnderlinedCell(inner){
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight();
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};

/*
We should create another cell
type that is like TextCell, but rather than padding the lines on the right
side, it pads them on the left side so that they align to the right.
We could simply write a whole new constructor with all three methods
in its prototype.But prototypes may themselves have prototypes, and
this allows us to do something clever.
*/


/*
function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length)
        }, 0);
};
*/
function RTextCell(text) {
    TextCell.call(this, text);
}
RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};
console.log(RTextCell.prototype.draw)


/*
function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(dataTable(MOUNTAINS));
console.log(drawTable(dataTable(MOUNTAINS)));
*/

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            var value = row[name];
            var result = null;
            // This was changed;
            if (typeof value == "number")
                result = new RTextCell(String(value));
            else 
                result = new TextCell(String(value));
            return result;
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));
