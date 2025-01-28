// When ready, use code below for testing

/*Exercise 7: Understanding Falsy Values in Complex Conditions

Problem:

Create a function `coalesce` that accepts any number of arguments and 
returns the first argument that is 
not falsy (false, 0, '', null, undefined, NaN). 

Use the logical OR (||) operator to implement this function.*/


// Outputs: Hello
console.log(coalesce(null, undefined, "", 0, "Hello", "World"));
// Outputs: First Truthy
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy"));
