//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================

//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================

//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.

// in ECMAScript 6 (ES6) arrow function , also known as fat arrow functions, were introduce as a concise way to anonymous function .

// const sum = function (a, b) {
//   let result = `The sum of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };
// sum(5, 5);

// const sum = (a, b) => {
//   let result = `The sum of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };

// const sum = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}`);

// sum(10, 20);

// const calculator = (num1, num2, operator) => {
//   let result;
//   switch (operator) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       return num1 - num2;
//       break;

//     default:
//       return "no operator found";
//   }
// };
// console.log(calculator(2, 3, "+"));

// Write a function to reverse a given string without using build in reverse methods.

// const isReverse = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }
//   return reverse;
// };
// console.log(isReverse("Gopal shukla"));

// palindrome check

//isi = isi,level=level

// const palindrome = (str) => {
//   let reverse = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     reverse = reverse + str[char];
//   }

//   if (str === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// };
console.log(palindrome("isi"));

