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

// to calculalte string's length without using func strlen-------------------------------------------------------
// let inputString = prompt("enter a string");
// let stringLength = 0;
// for (let ch of inputString) {
//   stringLength++;
// }
// console.log(stringLength);

// to reverse the string-------------------------------------------------------
// let inputString = prompt("enter a string");
// let reversedString = "";
// for (let i = inputString.length - 1; i >= 0; i--) {
//   reversedString = reversedString + inputString[i];
// }
// console.log(inputString);
// console.log(reversedString);

// calculate area of circle-------------------------------------------------------
// let radius = parseFloat(prompt("enter the radius of the circle : "));

// if (!isNaN(radius) && radius > 0) {
//   let area = Math.PI * Math.pow(radius, 2);
//   console.log(area);
// } else {
//   console.log("plz enter a valid number");
// }
// print table of N / user choice --------------------------------------------------
// let n = parseInt(prompt("enter a no."));
// if (!isNaN(n) && n > 0) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
//   }
// } else {
//   console.log("plz enter a valid no.");
// }

// print first 10 numbers using loop-------------------------------------------------------
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// print first 10 numbers in reverse order using loop-------------------------------------------------------
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// print first N numbers using loop-------------------------------------------------------

// let n = parseInt(prompt("enter the value N :"));
// if (!isNaN(n) && n > 0) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("plz enter the valid number");
// }

// print first 10 even no.s using loop-------------------------------------------------------

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// or----------------

// let num = parseInt(prompt("enter a table value"));
// if (num > 0 && !isNaN(num)) {
//   for (let i = 1; i <= num; i++) {
//     console.log(`${i}`);
//   }
// } else {
//   console.log("invalid no.");
// }
// print first 10 odd no.s using loop-------------------------------------------------------

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// or------------------

// let rad = parseInt(prompt("enter a table value"));
// if (rad > 0 && !isNaN(rad)) {
//   for (let i = 1; i <= rad; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   console.log("invalid no.");
// }
