"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am ".concat(this.name);
    };
    Person.prototype.tellMyAge = function () {
        return "I am ".concat(this.age, " years old");
    };
    return Person;
}());
var person1 = new Person('John', 40);
var person2 = new Person('Mary', 35);
console.log(person1.tellMyName());
console.log(person1.tellMyAge());
console.log(person2.tellMyName());
console.log(person2.tellMyAge());
assert_1["default"].equal(person1.tellMyName(), 'John');
assert_1["default"].equal(person1.tellMyAge(), 40);
assert_1["default"].equal(person2.tellMyName(), 'Mary');
assert_1["default"].equal(person2.tellMyAge(), 35);
