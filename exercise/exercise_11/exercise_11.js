/*
Exercise 11: Complex Conditional Logic in Loops

Problem:

Write a function `filterAndTransform` that takes an array of 
numbers and returns a new array where:

- All negative numbers are removed.
- All even numbers are squared.
- All odd numbers are incremented by 1.

Use for loops, if-else statements, and logical operators to 
implement this function. */

function filterAndTransform(myArr) {
    const newArr = []
    for(let i = 0; i < myArr.length; i++){
        if(myArr[i] < 0) {
            continue;
        }
        if(myArr[i] % 2 === 0) {
            newArr.push(myArr[i]**2)
        }
        else {
            newArr.push(myArr[i]+1)
        }
    }
    return newArr
}

let testArray = [-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(filterAndTransform(testArray))
let testArr2 = [1, -1, 2, -2, 3, -3]
console.log(filterAndTransform(testArr2))

const nums = [-3, -2, 0, 1, 2, 3, 4];
console.log(filterAndTransform(nums)); // Outputs: [0, 2, 4, 4, 16]
