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

// Result if function works correctly
// Outputs:
// {
//   darkMode: false,
//   notifications: true,
//   preferences: { autoSave: false, sync: true }
// }
