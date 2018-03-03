// the following code is a part of 0302 Polymorphism program that draws a table


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
            // Aligning to the right is done only for the numbers
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


/*It is occasionally useful to know whether an object was derived from
a specific constructor. For this, JavaScript provides a binary operator
called instanceof.*/
con
