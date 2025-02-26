// Creating two arrays
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9];

// Merging both arrays using spread operator
const joinedArray = [...nums1, ...nums2];


// Creating a user object
const user = {
    name: 'Gopal',
    age: 20,
};

// Creating a new object by copying 'user' and adding a new property 'city'
const updatedUser = {
    ...user,  // Copying existing properties from 'user'
    city: 'Noida'  // Adding a new property
};


// Function to add multiple numbers
function add() {
    let sum = 0;

    // Looping through all arguments (arguments is an array-like object)
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]; // Adding each argument to 'sum'
    }

    return sum; // Returning the total sum
}
