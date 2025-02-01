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
    temp = 0
    increment = function (def = true) {
        //console.log('function block')
        if(def === true) {
        if(this.count === this.max + 1) {
            this.count = 1
            this.temp = this.count - 1
            return `if block ${this.temp}`;
        }
        else {
            //console.log('else block')
            //console.log('postfix')
            this.temp = this.count
            ++this.count;

            
            return `else block ${this.temp}`;
        }
    }
        else {
            this.count = (this.count + 1) % (this.max + 1); 
            this.temp = this.count;
            return   this.temp
        }
    }

    decrement = function (def = true) {
        if(def){
            this.count = (this.count - 1 + (this.max + 1)) % (this.max + 1)
            return this.count
        }
        else {
            this.temp = this.count
            this.count = ((this.count - 1) + (this.max+1)) % (this.max + 1)
            return this.temp
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


//console.log(myclass.increment())
myclass.count = 0
console.log(myclass.increment(false))
console.log(myclass.increment(false))

console.log(myclass.increment(false))

console.log(myclass.increment(false))

console.log()
myclass.count = 0

console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log(myclass.decrement())
console.log()
myclass.count = 0
console.log(myclass.decrement(false))
console.log(myclass.decrement(false))
console.log(myclass.decrement(false))
console.log(myclass.decrement(false))

