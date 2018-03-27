var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro',       species: 'dog' },
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Harold',     species: 'fish' },
    { name: 'Ursula',     species: 'cat' },
    { name: 'Jimmy',      species: 'fish' }
  ]


// For loop
var names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

// Doing the same with Mapping
var names = animals.map(function(animal) { return animal.name })

// Actual mapping of the new object (changing it)
var names = animals.map(function(animal) { animal.name + ' the ' + animal.species })

// Arrow - availble only in EMC6
var names = animals.map((animal) => animal.name)
//
var names = animals.map((x) => x.name)
