// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

function sumOfMinimums(arr) {
  let array = []
    for(let i = 0;i<arr.length;i++){
    array.push(Math.min(...arr[i]))
  }
  return array.reduce((a,b)=>a+b)
  
  }
  
  // take in a 2-D array of numbers
  // return the sum of the minimum value of each subarray
  // [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] -> 9
  // 1. Go through each array
  // 2. Put the minimum values of each subarray in an array
  // 3. Find the sum of the minimum array
  // 4. Return that array