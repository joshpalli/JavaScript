// This program will manipulate an array with an object in it
// Make the array
let arr1 = ["Laurence", "Svekis", true, 35, null, undefined, {test: "one", score: 55}, ["one", "two"]];

// Remove the first and last items
arr1.pop();
arr1.shift();

// add first to the start of the array
arr1.unshift("FIRST");

// Assign Hello World to the 4th item
arr1[3] = "Hello World";

// Assign Middle to the 3rd index value
arr1[2] = "MIDDLE";

// Add last to the last position of the array
arr1.pop();
arr1.pop();
arr1.pop();
arr1.push("LAST");

// Print result
console.log(arr1);