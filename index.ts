let score: number[] = [90, 80, 99];

const user: { myName: string, myAge: number } = {

	myName: 'John',
	myAge: 30
};

console.log(user.myName);
console.log(score[1] + 5);


function add(a: number, b: number): number {
	return a + b;
}
console.log(add(5, 3));

function greet(name: string): string {
	return `Hello ${name}`;
}
console.log(greet('John'));


// INTERFACE

interface Person {
	name: string;
	age: number;
}
function printPerson(person: Person): void {
	console.log(`Name: ${person.name}, Age: ${person.age}`);
}

class Animal {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}


	makeSound(): void {
		console.log(`${this.name} is making sound`);

	}
}
const dog = new Animal('Dog', 5);
dog.makeSound();

//5. Enums
enum Color {
	Red,
	Green,
	Blue,
}
let myColor: Color = Color.Blue;

console.log(myColor);
