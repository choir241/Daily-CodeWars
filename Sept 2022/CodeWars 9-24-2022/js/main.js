// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// FUNDAMENTALS

function sumOfMinimums(arr) {
  let sum = 0
   arr.forEach(ele=>{
    sum += Math.min(...ele)
  })
   return sum
 }
 
 //given a 2-dimensional array of integers, return the sum of the minimum value of each subarray
 //will always be positive and non-empty
 //return sum of minimum values
 //1. go through each subarray
 //2. find the minimum of each subarray
 //3. add to a variable called sum
 //4. return the sum variable

 function sumOfMinimums(arr) {
  return arr.reduce((acc,prev)=>acc + Math.min(...prev),0)
  }