/*
Exercise 20: Advanced Use of Increment and Decrement Operators

Problem:

Create a class `CircularCounter` that counts from 0 up to 
a maximum value 'max' and then wraps around to 0 when incremented. 

Implement 'increment' and 'decrement' methods using prefix and postfix forms of 
the increment/decrement operators. 

Ensure that the counter behaves correctly at the boundaries. */

const CircularCounter = class {
    max = 3;
    count = 0;
    increment = function () {
        //console.log('function block')
        if(this.count === this.max) {
            this.count = 0
            return this.count;
        }
        else {
            //console.log('else block')
            this.count++;
            return this.count;
        }
    }

    decrement = function () {
        if(this.count === 0) {
            this.count = this.max;
            return this.count 
        }
        else {
            this.count--;
            return this.count
        }
    }
    
}

const myclass = new CircularCounter

//console.log(myclass)
//console.log(myclass.max)
//console.log(myclass.count)
myclass.count = 0
console.log(myclass.increment())
console.log(myclass.increment())
console.log(myclass.increment())
console.log(myclass.increment())
console.log(myclass.increment())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.increment())
console.log(myclass.increment())
console.log(myclass.increment())

