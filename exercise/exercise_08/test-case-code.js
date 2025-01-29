// When ready, use code below for testing

/*
Exercise 8: Object Equality and Memory References

Problem:

Write a function `areObjectsEqual` that takes two objects and returns 
true if they are equal by value, meaning they have the same properties and 
values (deep equality), and false otherwise. 

The function should handle nested objects and arrays.*/

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 4 } };



function areObjectsEqual(a, b) {
   if(a === b) return true;
   
   if (
    typeof a != "object" ||
    a == null ||
    typeof b != "object" ||
    b == null
  ) {
    return false;
  }

   let keysA = Object.keys(a);
   let keysB = Object.keys(b);

   if(keysA.length != keysB.length) return false;
   
   
   for (let key of keysA){
    if (!keysB.includes(key)) return false;
    if (!areObjectsEqual(a[key], b[key])) return false;
   }
   return true;
}


console.log(areObjectsEqual(objA, objB)); // Outputs: true
console.log(areObjectsEqual(objA, objC)); // Outputs: false
 