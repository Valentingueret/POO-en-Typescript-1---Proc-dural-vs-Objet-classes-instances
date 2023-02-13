import assert from "assert";


class Person {

    private name: string;
    private age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public tellMyName(): string {
        return `I am ${this.name}`;
    }

    public tellMyAge(): string {
        return `I am ${this.age} years old`;
    }

}


const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);

console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());

assert.equal(person1.tellMyName(), 'John');
assert.equal(person1.tellMyAge(), 40);
assert.equal(person2.tellMyName(), 'Mary');
assert.equal(person2.tellMyAge(), 35);