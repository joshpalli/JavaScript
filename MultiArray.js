// This program indexes a 3 dimensional array
// Create single arrays
arr1 = [1, 394, 83];
arr2 = [4, 35, 36];
arr3 = [46, 63, 25];

// create 2d arrays
multiArray1 = [arr1, arr2, arr3];
multiArray2 = [arr2, arr1, arr3];
multiArray3 = [arr3, arr1, arr2];

// Create 3d array
finalArray = [multiArray1, multiArray2, multiArray3];

// Index the first occurrence of 394 and the last occurrence of 46
console.log(finalArray[0][0][1]);
console.log(finalArray[2][0][0]);