class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }
}

// Instanciation de deux personnes
const john = new Person("John", 40);
const mary = new Person("Mary", 35);

// Appel des méthodes tellMyName et tellMyAge
john.tellMyName();
john.tellMyAge();

mary.tellMyName();
mary.tellMyAge();
