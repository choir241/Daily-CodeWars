// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// isSquare([1, 4, 9, 16]) --> true

// isSquare([3, 4, 7, 9]) --> false

// isSquare([]) --> undefined
// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

function isSquare(arr){
if(!arr.length){return undefined}
for(let i = 0; i < arr.length; i++){
  if(Math.sqrt(arr[i]) - Math.floor(Math.sqrt(arr[i])) !== 0){
    return false
  }
}
return true
}

function isSquare(arr){
return arr.length ? arr.every(ele=>Math.sqrt(ele) % 1 == 0) : undefined
}


//accepting an array, numbers
//array size 0 -> ?
//positive integers
//boolean? N strings? N Invalid/null/undefined N

//return undefined for empty arrays
//return true/false if all elements in array are square

// isSquare([1, 4, 9, 16]) -> true
// isSquare([]) -> undefined
// isSquare([3, 4, 7, 9]) -> false

// going through every element of the array -> loop
// check if its square -> Math.sqrt() if not decimal = square
// account for empty array -> if(!array.length){return undefined}
// check for decimals from Math.sqrt(), if decimal then return false -> if(Math.floor(Math.sqrt) - Math.sqrt() !== 0) {return false}
// if the loop finishes, return true
