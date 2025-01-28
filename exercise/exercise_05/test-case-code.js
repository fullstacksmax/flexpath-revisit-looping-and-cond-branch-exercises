// When ready, use code below for testing
/*
Exercise 5: Custom Increment/Decrement Operators

Problem:

Create an object `counter` with a property 'value' initialized to 0. 

Add methods 'increment' and 'decrement' that mimic the behavior of the 
increment (++) and decrement (--) operators. 

Ensure that the methods can be used in both prefix and postfix forms, and that 
they return the correct values.*/

const counter = {
    value: 0,
    increment: function (x = false) {
        if(x === true){
            //console.log('trueblock')
        return ++this.value;
        }
        else {
            //console.log('falseblock')
            return this.value++
        }
    },

    decrement: function (x = false) {
        if(x === true){
            //console.log('trueblock')

            return --this.value;
            }
            else {
                //console.log('falseblock')

                return this.value--
            }
        },
    }

    
    

console.log(counter.increment()); // Outputs: 0 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.increment(true)); // Outputs: 2 (prefix)
console.log(counter.value); // Outputs: 2
console.log(counter.decrement()); // Outputs: 2 (postfix)
console.log(counter.value); // Outputs: 1
console.log(counter.decrement(true)); // Outputs: 0 (prefix)
console.log(counter.value); // Outputs: 0  */
 