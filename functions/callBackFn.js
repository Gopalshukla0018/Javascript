// what is callback fn-

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation is completed. It allows you to control the order of execution, especially in asynchronous operations.

// Examples:

function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Gopal", sayGoodbye);

// Output:
// Hello, Gopal
// Goodbye!

// Key points about Callbacks:

// Callbacks are functions passed into other functions as arguments.

// They allow asynchronous operations like API calls, timers, or event handling.

// They help avoid blocking code execution.

// example-2

setTimeout(function () {
  console.log("This message is shown after 2 seconds");
}, 2000);
// In this example, the anonymous function is a callback that gets executed after 2 seconds.

function a(b) {
  console.log("a function called");
  b();
}

a(function b() {
  console.log("b function called");
});
