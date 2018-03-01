function Rabbit(name) {
    this.name = name
}
var killerRabbit = new Rabbit("Zabojca");
Rabbit.prototype.teeth = "Small";
console.log(killerRabbit.teeth);
Rabbit.prototype.speak = function(line) {
    console.log("Thy he said: " + line)
}
killerRabbit.speak("I am who you think I am")


// Overriding properties

Rabbit.prototype.teeth = "small"

Rabbit.prototype.teeth = "smaller"

Rabbit.prototype.teeth = "smallest"
console.log(Rabbit.prototype.teeth)

// Property interFerence
map = {}
Object.defineProperty(Object.prototype, "HiddenValue", {
    enumerable: false, value: "And there she is - hidden value"
});
for (var name in map)
    console.log(name)
console.log(map.HiddenValue)
console.log(map.hasOwnProperty("toString"));