// When ready, use code below for testing

/*
Exercise 8: Object Equality and Memory References

Problem:

Write a function `areObjectsEqual` that takes two objects and returns 
true if they are equal by value, meaning they have the same properties and 
values (deep equality), and false otherwise. 

The function should handle nested objects and arrays.*/

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };

console.log(objA.a === objB.a)
console.log(objA === objC)
//console.log(areObjectsEqual(objA, objB)); // Outputs: true
//console.log(areObjectsEqual(objA, objC)); // Outputs: false
