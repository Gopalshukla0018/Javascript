// console.log(x);  // Output: undefined
// var x = 10;
// console.log(x);  // Output: 10

console.log(y);  // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y);

hello();  //  Works fine

function hello() {
    console.log("Hello World!");
}

greet();  // ❌ ReferenceError: Cannot access 'greet' before initialization

const greet = function () {
    console.log("Good Morning!");
};

