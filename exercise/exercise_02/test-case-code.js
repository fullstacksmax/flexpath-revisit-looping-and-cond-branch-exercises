// When ready, use code below for testing
/*
Exercise 2: Nested Ternary Operators for Complex Decisions

Problem:

Create a function `calculateDiscount` that takes a customer's 
membershipLevel ('gold', 'silver', 'bronze', or 'none') and a purchaseAmount. 

The function should return the discount percentage based on the following:

- 'gold': 20%
- 'silver': 15%
- 'bronze': 10%
- 'none': 0%

Use nested ternary operators to implement this logic 
in a single return statement.*/

function calculateDiscount(membershipLevel, purchaseAmount) {
    let gold = 0.2;
    let silver = 0.15;
    let bronze = 0.1;
    let none = 0;
    
    
    let result =    membershipLevel === 'gold' ? gold:
                    membershipLevel === "silver" ? silver:
                    membershipLevel === "bronze" ? bronze:
                    none
    return result * purchaseAmount;

}


console.log(calculateDiscount("gold", 100)); // Outputs: 20
console.log(calculateDiscount("silver", 200)); // Outputs: 30
console.log(calculateDiscount("bronze", 150)); // Outputs: 15
console.log(calculateDiscount("none", 100)); // Outputs: 0
