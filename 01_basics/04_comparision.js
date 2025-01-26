// Comparing null with a number
console.log(null > 0);   // false: In JavaScript, when null is compared with a number using a comparison operator (like >, <, >=, etc.), it is coerced to 0. This checks whether 0 > 0, which is false.
console.log(null == 0);  // false: The == operator performs loose equality, meaning it checks if the values are equal after type coercion. However, null is only loosely equal to null or undefined (but not 0), so null == 0 is false.
console.log(null >= 0);  // true: When comparing null with a number using >= (greater than or equal to), JavaScript treats null as 0. This is equivalent to checking if 0 >= 0, which is true.


// Comparing undefined with a number
console.log(undefined == 0);   // false: undefined is not loosely equal to 0 in JavaScript. This checks if undefined is equal to 0, which is false.
console.log(undefined > 0);    // false: When undefined is compared with a number, JavaScript cannot perform the comparison, so it results in NaN (Not-a-Number). Since NaN is not greater than any number, this is false.
console.log(undefined < 0);    // false: Similarly, undefined results in NaN, and comparing NaN to any number (like 0) always results in false. This is false.


// Strict equality comparison: checks both value and type
console.log("2" === 2);   // false: The === operator is the strict equality operator. It checks both the value and type. "2" is a string, and 2 is a number. Since their types are different, the comparison evaluates to false.
