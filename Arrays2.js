// This program tests out Array Methods and Functions

// Initialize Array
arr1 = ["Apples", "Bananas", "Pizza", "Milk"];

// Push function
let arr1Length = arr1.push("Beans", "Cereal");
console.log("Push Test: The Length of the array is:", arr1Length);
console.log(arr1);

// Splice function - It first deletes if necessary, then adds elements
arr1.splice(4, 1, "Soup", "Chicken");
console.log("Splice Test:", arr1);

// Concat Method - Connects 2 arrays together
// To concatenate, use format newArr = arr2.concat(arr1);
arr2 = ["Onions", "Juice"];
arr3 = arr1.concat(arr2);
console.log("Concat Test:", arr3);

// Pop Method - Deletes the last entry in the arr
arr3.pop();
console.log("Pop Test:", arr3);

// Shift Method - Deletes the first entry in arr and shifts all entries to the left.
arr3.shift();
console.log("Shift Test:", arr3);

// Find Function - Checks if an element is present in the arr
findElement1 = arr3.find(function(e) { return e === "Onions"});
findElement2 = arr3.find(e => e === "Cereal");
console.log("Find Test 1:", findElement1);
console.log("Find Test 2:", findElement2);

// indexOf Method - Returns the index of an element
// If value is not found it will return -1
// If there is a duplicate entry, it will return the lowest index of same data
index1 = arr3.indexOf("Pizza");
console.log("The index of the specified element is:", index1);

// lastIndexOf Function - Returns the last occurrence of an element
arr3.push("Soup");
lastInd = arr3.lastIndexOf("Soup");
console.log("The last occurrence of the element is at index:", lastInd);

// Sort and Reverse
arr3.sort();
console.log("The sorted array is:", arr3);

arr3.reverse();
console.log("The array in reverse is:", arr3);