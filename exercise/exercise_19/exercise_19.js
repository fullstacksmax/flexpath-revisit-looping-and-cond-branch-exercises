/*
Exercise 19: Handling Complex Truthy/Falsy Conditions

Problem:

Write a function `normalizeInput` that accepts any value and returns:

- The value itself if it is truthy.
- A default value 'N/A' if the value is falsy but not null or undefined.
- hrows an error if the value is null or undefined.

Use conditional logic and strict equality operators to implement this. */

function normalizeInput(val) {
    if(val === null || val === undefined) {
        throw new Error("null or undefined")
    }

    if(val === 0 || val === "" || val === false || Number.isNaN(val)){
        return "N/A"
    }
    else {
        return val
    }
}

console.log(normalizeInput(0))
console.log(normalizeInput(false))
console.log(normalizeInput(NaN))
//console.log(normalizeInput(null))
//console.log(normalizeInput(undefined))
console.log(normalizeInput(2))