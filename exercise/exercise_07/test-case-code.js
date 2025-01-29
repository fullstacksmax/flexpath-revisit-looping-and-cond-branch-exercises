// When ready, use code below for testing

/*Exercise 7: Understanding Falsy Values in Complex Conditions

Problem:

Create a function `coalesce` that accepts any number of arguments and 
returns the first argument that is 
not falsy (false, 0, '', null, undefined, NaN). 

Use the logical OR (||) operator to implement this function.*/


function coalesce() {
   for(let i = 0; i < arguments.length; i++) {
    if(arguments[i] === false ||arguments[i] === 0 ||arguments[i] === '' ||arguments[i] === null ||arguments[i] === undefined
         ||Number.isNaN(arguments[i])) {
        continue;
        
    }
    return arguments[i]
    
    //console.log(i)
    //console.log(arguments[i])
   }
    
}

// Outputs: Hello
//console.log(coalesce(0,1))
console.log(coalesce(null, undefined, "", 0, "Hello",NaN, "World"));
// Outputs: First Truthy
console.log(coalesce(false, 0, "",NaN, "First Truthy"));

console.log('devil magic NaN === NaN ',NaN === NaN)
