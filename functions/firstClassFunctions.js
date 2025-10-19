// normal function
function normalfn() {
  console.log("normal function called");
}

normalfn(); // we can all it any where

// anonymous function
// syntax error function statement reqired  a function name
//  function (){
//  console.log("anonymous function called");

// }

// a() // we can not call it before declaration -
// we can call it after declaration
/// function expression
var a = function b() {
  console.log("function b called");
};

a(); // function b called
// if we call b () - it is error - b is not defined

// b();

// arguments and parameters
function sum(x, y) {
  // x and y are parameters
  console.log("sum is ", x + y);
}
sum(10, 20); // 10 and 20 are arguments

// first class functions - Abilityt to treat functions as values
// we can pass function as an argument to another function
// first class citizens

var a = function (param1) {
  return function xyz() {};
};
console.log(a());
