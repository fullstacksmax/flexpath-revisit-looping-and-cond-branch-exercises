/* 
Exercise 16: Logical Operator Precedence in Complex Conditions

Problem:

Write a function `validateInput` that accepts an object with 
properties 'username', 'password', and 'email'. 

The function should return true if:

- username and password are non-empty strings, and email contains an '@' symbol, 

or

- The user has a property isGuest set to true.


Use logical operators and parentheses to ensure the correct evaluation order.*/

function validateInput(obj) {
    if(obj.isGuest) {
        return true;
    }
    if((obj.username != "" && obj.password != "") && obj.email.includes("@")){
        return true;
    }
    else {
        return false;
    }
}

const user1 = {
    isGuest: false,
    username: "mvontz",
    password: "abc123",
    email: "max@max.com"
}
console.log(user1.email)
console.log(validateInput(user1))