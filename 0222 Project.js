var journal = [];

function addEntry(Events, didITurnIntoSquirrel) {
    journal.push({
        events: Events,
        squirrel: didITurnIntoSquirrel
    });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);


console.log(journal)

function phi(table) {
    return (table[3]*table[0]-table[2]*table[1]) /
    Math.sqrt(
        (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[2] + table[3]) *
        
    )
}



// TBC