//////////////////////////////////////////////////////
/// Everything is run on:
/// http://plnkr.co/edit/J81EK3TWFof0ekhEnyiJ?p=preview
/// cause it has display() function
/////////////////////////////
// This enables a user to pass JSON
var cat = {
    name: 'Fluffy',
    color: 'White',
}

cat['Eye color'] = 'Green'
display(cat['Color'])

/// Object's property and changing it's values
'use strict'; 
var cat = {
    name: 'Fluffy', 
    color: 'White',
}

display(Object.getOwnPropertyDescriptor(cat, 'name'))
Object.defineProperty(cat, 'name', {writable: false})
display(Object.getOwnPropertyDescriptor(cat, 'name'))
cat.name = 'GiveMeAnError'
///////////////////////
// Ths works
'use strict';  // Strict is always goot to use because in this example name property  can be changed without any error from the browser
var cat = {
    name: {first: 'James', last: 'Bond'},
    color: 'White',
}

display(Object.getOwnPropertyDescriptor(cat, 'name'))
Object.defineProperty(cat, 'name', {writable: false})
cat.name.first = 'Scratchy'
display(cat.name)

/// but if I want to make whole property name of the object
/// Unreadable I have to freeze it
Object.freeze(cat.name) // Not it will throw an error again

///////////////////////////////////////////////////////////////
/// Enumerable attribute
'use strict';
var cat = {
    name: {first: 'James', last: 'Bond'},
    color: 'White',
};
// When I change the property enumerable to false it shows up only the color
Object.defineProperty(cat, 'name', {enumerable: false});
for (var propertyName in cat){
  display(propertyName + ': ' + cat[propertyName])
}

//neither it shows up in the JSON string
display(JSON.stringify(cat))
display(cat['name']) // changing the enumerable to false doesn not change the ability to look it 
// Changing the ability of changing the propoerties
Object.defineProperty(cat, 'name', {configurable: false});
Object.defineProperty(cat, 'name', {enumerable: false});
Object.defineProperty(cat, 'name', {configurable: true});

// how to define your own property
// - Getting and setting it!
'use strict';
var cat = {
    name: {first: 'James', last: 'Bond'},
    color: 'White',
};
Object.defineProperty(cat, 'fullName',
{
    get: function() {
        return this.name.first + " " + this.name.last
    },
    set: function(value){
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
});
cat.fullName = 'Muffin Top'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)