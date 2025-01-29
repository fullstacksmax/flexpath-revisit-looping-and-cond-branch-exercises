/* 
Exercise 12: Custom Mathematical Operator Functions

Problem:

Implement custom functions for addition (add), subtraction (subtract), 
multiplication (multiply), division (divide), modulus (mod), and 
exponentiation (power) without using the built-in operators (+, -, *, /, %, **). 

Use only the increment (++) and decrement (--) operators, 
loops, and conditional statements.*/

function add(a, b) {
    if(b >= 0) {
    for(let i = 0; i < b; i++){
        a++;
    }
}
else {
    for(let i = 0; i < Math.abs(b); i++){
        a--;
    }
}


    return a
}
//console.log(add(2,61))
//console.log(add(2,-61))

function subtract(a,b) {
    for(let i=0; i < b; i++) {
        a--;
    }
    if(b < 0) {
        for(let i = 0; i < Math.abs(b); i++) {
            a++;
        }
    }
    return a
}

//console.log(subtract(5, 15))
//console.log(subtract(5, -15))

function multiply(num1, num2) {
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    if(a === 0 || b === 0){
        a = 0
        return a;
    }
    for(let i = 1; i < b; i++){
        for(let j = 0; j < Math.abs(num1); j++){
            a++
        }
    }
    if((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0))
    return a;
    else {
        return -a;
    }

}


//console.log(multiply(-10,-4))

function divide(num1, num2) {
    let divisor = 0;
    let a = Math.abs(num1);
    let b = Math.abs(num2);

    if(b === 0) {
        throw new Error('denominator cannot be zero')
    }
    if(a === 0) {
        return divisor;
    }


    
    while(a> 0) {

    for(let i = 1; i <= b; i++){
        if(a === 0){
            break;
        }   
        //console.log(i)
        a--
    }
    divisor++     
    }
    
        
    
    if((num1 < 0 && num2 < 0) || (num1 > 0 && num2 > 0))
        return divisor;
        else {
            return -divisor;
        }
}


//divide(2 , 2)

console.log(divide(-2342 , 3))