// class Person {
//     name = "Max"; // property
//     call = () => {} // method
// }

const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// Extend - inheriting

class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // Calls the Human constructor and initialises it's class
        this.name = "Max";
        this.gender = "female";
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();