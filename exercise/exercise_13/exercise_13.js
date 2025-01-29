/*
Exercise 13: Deep Understanding of Truthy and Falsy Values

Problem:

Write a function `countFalsyValues` that takes an array of values and 
returns the number of falsy values in the array. 

Use the Boolean constructor and logical operators to implement this. */

function countFalsyValues(arr) {
    let  falsy = 0;
    for(let i of arr) {
        /* if (arr[i] === "" ||arr[i] === false||arr[i] === null||Number.isNaN(arr[i])||arr[i] === undefined||arr[i] === 0){
            falsy += 1;
        } */
       if(!Boolean(i)){
        falsy++;
       
    }
}
    return falsy;
}

let testarr = [0,1,2,3,4,5,6,null,false,"",undefined,NaN]


console.log(countFalsyValues(testarr))