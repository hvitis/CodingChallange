// https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3

function triple(x) {
    return x * 3
}


// not all languages can do this:
var triple = function triple(x) {
    return x * 3
}

// we can pass it around
var waffle = triple
console.log(waffle(39))
// What are higher order functions good for? -- Composition
// simple higher order function - filter
var animals = [
    {name: "Jork", species: "dog"},
    {name: "Jack", species: "bird"},
    {name: "Brown", species: "snake"},
    ]

var dogs = animals.filter(function(animal) {
    return animal.species == "dog"
})

var isDog = function(animal) {
    return animal.species === "dogs"
}

var dogs = animals.filter(isDog)
//????? var otherAnimals = animals.reject(isDog)

/*
var animals = [
{name: "Jork", species: "dog"},
{name: "Jack", species: "bird"},
{name: "Brown", species: "snake"},
]

var dogs = []
for (var i = 0; i < animals.length; i++) {
    if (animals[i].species == "dog")
        dogs.push(animals[i])
}
console.log(dogs)
*/

var animals = [
    {name: "Jork", species: "dog"},
    {name: "Jack", species: "bird"},
    {name: "Brown", species: "snake"},
    ];

// MAPPING - like filter but doesnt throw away but transforms
// filter and map transforn arrays into something different
// .find works the same (only returns a single first item)
/*
    var names = [];
    for (var i = 0; i < animals.length; i++) {
        names.push(animals[i].name)
    }
    console.log(names)
*/

var names = animals.map(function(animal) {
    return animal.name + " is a " + animal.species
});
console.log(names)


// REDUCING

var orders = [
    { amount: 250 },
    { amount: 254 },
    { amount: 150 },
    { amount: 450 },
    { amount: 350 },
]

var totalAmount = orders.reduce(function(sum, order) {
    console.log("This is sum and order: " + sum, order)
    return sum + order.amount
}, 0)
console.log(totalAmount)
/*
This is sum and order: 0 { amount: 250 }
This is sum and order: 250 { amount: 254 }
This is sum and order: 504 { amount: 150 }
This is sum and order: 654 { amount: 450 }
This is sum and order: 1104 { amount: 350 }
1454
*/
/* 
// Done with for not reduce
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
console.log(totalAmount)
*/

