// // array

// const myArr = [ 1, 23 , 23 , 45 , 7]
// const myHeros = ["shaktiman","naagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// console.log(myArr2.length);

// // Array methods

// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()
// // myArr.cancat() -- array ko jod deta hai--

// // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);

// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// how to compare

// const fruits=["Banana","Apple","Apple","Orange","Mango"];

// const number = [1, 2, 4, 3, 8, 5, 6, 7,9];
// number.sort();
// console.log(number);

// compare callback function
// const number = [1, 2, 4, 3, 8, 5, 6, 7,9];
// number.sort(a,b)

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
// const words = ["APPLE", "banana", "cherry", "date"];
// const result = words.map((curElem) => {
//   return curElem.toUpperCase();
// });
// console.log(result);

// lower case

// const words = ["APPLE", "banana", "cherry", "date"];
// const result = words.map((curElem) => {
//   return curElem.toLowerCase();
// });
// console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.
//     const number = [1,2,3,4,5];
// const result = number.map((curElem)=>{
//     if (curElem % 2===0) {

//         return curElem*curElem;
//     }

// }).filter((curElem)=>curElem !== undefined);
// console.log(result);
