// normal function
function normalfn(){
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
var a= function b() {
    console.log("function b called");
}

a(); // function b called
// if we call b () - it is error - b is not defined

b();