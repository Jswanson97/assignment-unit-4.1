console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'



//Input = This function should have a name argument when it is called
function helloName(name) {
  console.log('inside of helloName', name);
//The internal details of the function
//'Hello, ' + name + '!';
let result = 'Hello, ' + name + '!';
//Output = Capture results in a variable, then return
  return result;
}

// Remember to call the function to test
console.log('Hello Name function', helloName('Jesse'));

// 3. Function to add two numbers together & return the result
//
function addNumbers(firstNumber) {
  console.log('inside of addNumbers')
  // return firstNumber + secondNumber;
  //declare a secondNumber
  let secondNumber = 5;
  //add firstnumber + secondNumber
  let answer = firstNumber + secondNumber;
  return answer;
}

console.log('The answer of addNumbers is', addNumbers(7));

// 4. Function to multiply three numbers & return the result
function multiplyThree() {
  console.log('inside of multiplyThree');
  //declare and assign 3 numbers
  let number1 = 2;
  let number2 = 6;
  let number3 = 2;
  let answer = number1 * number2 * number3;
  return answer;

}

console.log('The answer is', multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
  return false;
  }
}

console.log (`check if number is greater than 0 ${isPositive}`);

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log (`check if 6 is greater than 0 ${isPositive(6)}`);
console.log (`check if -2 is greater than 0 ${isPositive(-2)}`);

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
if (array.length == 0) {
  return undefined;
}
return array[array.length - 1];
}

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (const element of array) {
  if (value === element) {
    return true;
  }
}
return false;
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
