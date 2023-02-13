"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        return `I am ${this.name}`;
    }
    tellMyAge() {
        return `I am ${this.age} years old`;
    }
}
const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);
console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
assert_1.default.equal(person1.tellMyName(), 'John');
assert_1.default.equal(person1.tellMyAge(), 40);
assert_1.default.equal(person2.tellMyName(), 'Mary');
assert_1.default.equal(person2.tellMyAge(), 35);
