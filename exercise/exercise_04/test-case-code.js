// When ready, use code below for testing

/*
Exercise 4: Advanced Comparison Operators and Type Coercion

Problem:

Write a function `areValuesEqual` that compares two values and 
returns true if they are equal in value AND type, and false otherwise. 

Handle cases where values are objects, arrays, or functions by 
comparing their references.*/

function areValuesEqual2 (a,b) {
    if(a === b) {
        return true
    }
    else {
        return false
    }
}


function areValuesEqual(a, b) {
    if(typeof a === typeof b) {
        if(a === b) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}






console.log(areValuesEqual(5, "5")); // Outputs: false
console.log(areValuesEqual(5, 5)); // Outputs: true
console.log(areValuesEqual([1, 2], [1, 2])); // Outputs: false
const obj = { x: 1 };
console.log(areValuesEqual(obj, obj)); // Outputs: true
console.log(areValuesEqual(null, undefined)); // Outputs: false
