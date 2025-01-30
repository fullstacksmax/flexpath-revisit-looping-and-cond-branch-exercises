/*
Exercise 15: Advanced Use of Switch Statements

Problem:

Implement a function `evaluateOperation` that takes two numbers and 
a string representing an operator ('+', '-', '*', '/', '%', '^') and returns 
the result of applying that operator to the two numbers. 

Use a switch statement and ensure proper handling of invalid operators. */

function evaluateOperation(a,b ,c) {
    switch(b) {
        case '+': 
            return a + c;
        case '-':
            return a - c;
        case '*':
            return a * c;
        case '/':
            return a / c;
        case '%':
            return a % c;
        case '^':
            return a ** c;
        default:
            return "invalid operator";
    }
}

console.log(evaluateOperation(3, "+", 4))
console.log(evaluateOperation(3, "-", 4))
console.log(evaluateOperation(3, "*", 4))
console.log(evaluateOperation(12, "/", 4))
console.log(evaluateOperation(30, "%", 4))
console.log(evaluateOperation(3, "^", 4))
console.log(evaluateOperation(3, "x", 4))
