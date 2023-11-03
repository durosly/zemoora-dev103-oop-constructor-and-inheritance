class Animal {
	constructor(name, age, legs = 4, species = "mammal") {
		this.name = name;
		this.age = age;
		this.no_of_legs = legs;
		this.species = species;

		console.log("animal constructor");
	}
}

const instance1 = new Animal("goat", "3 months", 6, "ant");
console.log(instance1);

class Goat extends Animal {
	constructor(name, age) {
		super(name, age);
		console.log("goat constructor");
	}
}

const instance2 = new Goat("John", "6 months");
console.log(instance2);
