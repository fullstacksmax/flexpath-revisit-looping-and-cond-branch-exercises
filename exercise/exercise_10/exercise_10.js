/*
Exercise 10: Memory Management with Closures and the Heap

Problem:

Explain how closures can lead to increased memory usage in JavaScript. 

Create an example where a closure holds onto a large object in the heap, 
preventing it from being garbage collected. 

Show how to modify the code to allow for proper garbage collection.*/

function largeArray(){
    const largeArray = new Array(123456789)
    return function () {
        return largeArray.length
    }
}
let leaky = largeArray()

 leaky = null;


