function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("Killer");
var blackRabbit = new Rabbit("Black");
console.log(blackRabbit.type);
