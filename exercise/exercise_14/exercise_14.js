/* 
Exercise 14: Object Property Enumeration and Memory Reference

Problem:

Create an object `dataStore` that contains various data types as 
properties (numbers, strings, arrays, objects). 

Write a function `deepFreeze` that recursively freezes the object and 
all nested objects, preventing any modifications. 

Demonstrate that after freezing, properties cannot be changed, 
added, or deleted.*/

let dataStore = {
    a: 1,
    b: "string",
    c: [1,2,3,4],
    d: {e:5}
}

function deepFreeze(obj){
    
        for(let keys of Object.keys(obj)){
            Object.freeze(keys)
            //Object.freeze(obj[keys])
        }
        Object.freeze(obj);
        return obj;
        
    
    
}
console.log(dataStore.c[0])
deepFreeze(dataStore)
dataStore.c = 4;
console.log(dataStore.c)


/* deepFreeze(dataStore)
dataStore.a = 6;
console.log(dataStore.a) */