// When ready, use code below for testing
/*
Exercise 6: Complex Logical Conditions with Short-Circuit Evaluation

Problem:

Write a function `evaluateExpression` that accepts three Boolean functions 
funcA, funcB, and funcC. 

The function should return true if:

- funcA() returns true, or
- funcB() returns true, and funcC() returns false.


Use logical operators to ensure that funcC() is only called if 
funcB() returns true. 

Demonstrate the short-circuit behavior.*/



function evaluateExpression(a, b, c){
  if(a() === true){
    //console.log("first")
    return a()
  }
  if(b() === true ){
    if(c() === false){
      //console.log('second')
      return true
    }
  }
  else {
    return false
  }
}

// alternatively
function evaluateExpression2(funcA, funcB, funcC) {
  return funcA() || (funcB() && !funcC())
}




function funcA() {
  console.log("funcA called");
  return false;
}

function funcB() {
  console.log("funcB called");
  return true;
}

function funcC() {
  console.log("funcC called");
  return false;
}
//console.log(funcA() === true)
// Outputs: funcA called, funcB called, funcC called, true
console.log(evaluateExpression(funcA, funcB, funcC));
console.log(evaluateExpression2(funcA, funcB, funcC));
