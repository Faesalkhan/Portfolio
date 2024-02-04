//swapping of two integers -------------------------------------------------------
// let a = 5;
// let b = 10;
// console.log(`before swapping a : ${a} and b : ${b}`);
// let temp = a;
// a = b;
// b = temp;
// console.log(`after swapping a : ${a} and b : ${b}`);

// swapping of two integers without 3rd variable -------------------------------------------------------
// let a = 10;
// let b = 20;
// console.log(`before swapping, a : ${a} and b : ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`after swapping, a: ${a} and b: ${b}`);

// check if no. is even/not without using % operator-------------------------------------------------------
// function isEven(n) {
//   return (n & 1) === 0;
// }
// let num = 4;
// if (isEven(num)) {
//   console.log(`${num} is even`);
// } else {
//   console.log(`${num} is odd`);
// }

// allow the user to enter a input integer -------------------------------------------------------
// let userInput;
// do {
//   userInput = prompt("enter a no.:");
//   userInput = parseInt(userInput);
// } while (isNaN(userInput) || !Number.isInteger(userInput));
// console.log(`you entered: ${userInput}`);

//or

// let input = parseInt(prompt("enter a number"));
// if (!isNaN(input) && input > 0) {
//   console.log(input);
// } else {
//   console.log("plz enter a + number");
// }

// adding two numbers -------------------------------------------------------
// let num1 = parseFloat(prompt("enter the first number :"));
// let num2 = parseFloat(prompt("enter the second number :"));
// if (!isNaN(num1) && !isNaN(num2)) {
//   let sum = num1 + num2;
//   console.log("addition is : " + sum);
// } else {
//   console.log("plz enter the valid numbers");
// }

// to calculate the string length-------------------------------------------------------
// let inputString = prompt("enter a string");
// let stringLength = inputString.length;
// console.log(stringLength);
