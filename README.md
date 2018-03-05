# CodingChallange
My 12 months coding challange
Starting on 15th of February 2018

# Resolutions
1. Make at least 1 commit everyday to sum up minimum 1 hour learning effort.
2. To have fun!

# Interesting links: 

Explaining the book that I started with
https://github.com/fhdhsni/The-Secret-Life-of-Objects

Interesting chanel on youtube that I did a few video from
https://www.youtube.com/watch?v=bCqtb-Z5YGQ



# Important phrases noticed during learning:

1. There are some named properties in arrays, such as length and a number
of methods. Methods are functions that live in properties and (usually)
act on the value they are a property of.
2. (It’s a bit silly that we have to define plus as a function, but operators
in JavaScript, unlike functions, are not values, so you can’t pass them
as arguments.)
3. Usually a method needs to do something with the object it was called
on. When a function is called as a method—looked up as a property and
immediately called, as in object.method()—the special variable this in its
body will point to the object that it was called on.
4. In addition to their set of properties,
almost all objects also have a prototype. A prototype is another object
that is used as a fallback source of properties.
5. A more convenient way to create objects that derive from some shared
prototype is to use a constructor. In JavaScript, calling a function with
the new keyword in front of it causes it to be treated as a constructor.
6. When you add a property to an object, whether it is present in the
prototype or not, the property is added to the object itself, which will
henceforth have it as its own property. If there is a property by the same
name in the prototype, this property will no longer affect the object. The
prototype itself is not changed.
7. Using a variable name starting with an underscore (_) or consisting
entirely of a single underscore is a way to indicate (to human readers)
that this argument is not going to be used.
8. In an object literal, the get or set notation for properties allows you
to specify a function to be run when the property is read or written.
9. Prototypes may themselves have prototypes, and
this allows us to do something clever.
10. Commenting my code on the beginning of learning will help me with 
reading the code later.
11. Important Summary:
So objects are more complicated than I initially portrayed them. They
have prototypes, which are other objects, and will act as if they have
properties they don’t have as long as the prototype has that property.
Simple objects have Object.prototype as their prototype.
Constructors, which are functions whose names usually start with a
capital letter, can be used with the new operator to create new objects.
The new object’s prototype will be the object found in the prototype
property of the constructor function. You can make good use of this by
putting the properties that all values of a given type share into their prototype.
The instanceof operator can, given an object and a constructor,
tell you whether that object is an instance of that constructor.