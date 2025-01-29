// Use this for testing
/*
Exercise 9: Advanced Usage of the NOT Operator

Problem:

Implement a function `invertBooleanProperties` that takes an object and 
inverts all of its Boolean properties (i.e., true becomes false, and vice versa). 

The function should modify the original object and handle nested objects.*/


const settings = {
  darkMode: true,
  notifications: false,
  preferences: {
    autoSave: true,
    sync: false,
  },
};

//console.log(typeof settings.preferences)
//console.log(typeof settings.preferences)
//console.log(typeof settings.darkMode)

//console.log(settings.preferences)
function invertBooleanProperties() {
  for(let key in settings) {
    //console.log(typeof settings[key] === "object")
    if((typeof settings[key]) === "object"){
      //console.log('nested')
      let nested = settings[key]
      for(let birds in nested){
        //console.log(`nested[birds ${nested[birds]}]`)
        //console.log(`birds ${birds}`)
        if(nested[birds]) {
          //console.log('firstblock')
          //console.log(birds)
          nested[birds] = false;
        }
        else{
          //console.log('second block')
          //console.log(birds)
          nested[birds] = true;
        }
      }
      continue;
    }
    
    
    if(settings[key]){
      //console.log('trueblock')
      settings[key] = false;
    }
    else{
      //console.log('falseblock')
      settings[key] = true;
    }
  }
  return settings
}
console.log(invertBooleanProperties(settings))
//console.log(settings.darkMode)
//console.log(settings.preferences)
// Result if function works correctly
// Outputs:
// {
//   darkMode: false,
//   notifications: true,
//   preferences: { autoSave: false, sync: true }
// }
