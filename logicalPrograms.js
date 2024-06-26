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
// print first N even no.s using loop-------------------------------------------------------

// let n = parseInt(prompt("enter value of N :"));
// if (!isNaN(n) && n > 0) {
//   for (let i = 2; i <= n; i += 2) {
//     console.log(i);
//   }
// } else {
//   console.log("plz enter a valid number");
// }

// print first N odd no.s using loop--------------------------------------------

// let n = parseInt(prompt("enter value of N :"));
// if (!isNaN(n) && n > 0) {
//   for (let i = 1; i <= n; i += 2) {
//     console.log(i);
//   }
// } else {
//   console.log("plz enter a valid number");
// }

// calculate sum of N no.s--------------------------------------------

// let num = parseInt(prompt("enter a number"));
// let sum = 0;
// if (!isNaN(num && num >= 0)) {
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// } else {
//   console.log("enter a valid no.");
// }

// calculate multipy/factorial of N no.s--------------------------------------------

// let num = parseInt(prompt("enter a number"));
// let mul = 1;
// if (!isNaN(num && num >= 0)) {
//   for (let i = 1; i <= num; i++) {
//     mul = mul * i;
//   }
//   console.log(mul);
// } else {
//   console.log("enter a valid no.");
// }

// print sum of first N even no.s-------------------------------------------- 2+4+6+8+10

// function calcOddSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 2 * i;
//   }
//   return sum;
// }
// const result = calcOddSum(5);
// console.log(result);

// print sum of first N odd no.s--------------------------------------------1+3+5+7+9

// function calcOddSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 2 * i + 1;
//   }
//   return sum;
// }
// const result = calcOddSum(5);
// console.log(result);
// count the digits in number--------------------------------------------

// let number = parseInt(prompt("enter a number"));
// if (!isNaN(number)) {
//   let num = number.toString().length;
//   console.log(num);
// }

// or-----------

// let num = prompt("enter a table value");
// console.log(num.length);

// calculate the sum of digits of number--------------------------------------------

// let number = parseInt(prompt("Enter a number :"));
// if (!isNaN(number)) {
//   let numberString = number.toString();
//   let sum = 0;
//   for (let digit of numberString) {
//     sum += parseInt(digit);
//   }
//   console.log(sum);
// } else {
//   console.log("plz enter valid number");
// }

// or----------------------

// let num = prompt("enter a number");
// let sum = 0;
// for (let i of num) {
//   sum += parseInt(i);
// }
// console.log(sum);

// or-------------------

// let num = prompt("enter a number");
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += parseInt(num[i]);
// }
// console.log(sum);

// to reverse a number--------------------------------------------

// let number = 12345;
// let revN = 0;
// while (number > 0) {
//   let remainder = number % 10;
//   revN = revN * 10 + remainder;
//   number = Math.floor(number / 10);
// }
// console.log(revN);

// or---------------------

// let num = 12345;
// let rev = "";
// while (num > 0) {
//   let rem = num % 10;
//   rev += rem.toString();
//   num = Math.floor(num / 10);
// }
// console.log(rev);

// or---------------------

// let num = prompt("enter a number");
// str = "";
// for (let i = num.length - 1; i >= 0; i--) {
//   str += num[i];
// }
// console.log(str);

// lcm of two no.s--------------------------------------------

// let a = 4;
// let b = 6;

// for (let i = 1; i <= a * b; i++) {
//   if (i % a === 0 && i % b === 0) {
//     console.log(i);
//     break;
//   }
// }

// calculate x power of y--------------------------------------------

// let result = 1;
// let x = 2;
// let y = 3;
// for (let i = 1; i <= y; i++) {
//   result = result * x;
// }
// console.log(result);

// or-------------------

// function calcpower(x, y) {
//   let result = 1;
//   for (let i = 1; i <= y; i++) {
//     result = result * x;
//   }
//   return result;
// }
// const power = calcpower(2, 4);
// console.log(power);

// or-------------------

// let res = Math.pow(2, 3);
// console.log(res);

// check if no is prime or not--------------------------------------------

// function primeNo(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }
// const result = primeNo(8);
// console.log(result);

// or-------------------

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const result = isPrime(11);
// console.log(result);

// // here we just wrote sq root of number instead of numer itself (loop will go upto sqrt instead of no. itself).
// (any no. dividing the n will also divide its sq root ) makes no difference.
// // if it is prime no. it'll return true else false.

// print all prime no.s b/n 2-100 --------------------------------------------

// let a, b;
// for (a = 1; a <= 100; a++) {
//   for (b = 2; b <= a; b++) {
//     if (a % b === 0) {
//       break;
//     }
//   }
//   if (a === b) {
//     console.log(a);
//   }
// }

// or----------------------

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function printPrimeRange(st, en) {
//   for (let i = st; i <= en; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// printPrimeRange(2, 100);
