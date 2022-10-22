// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]'

function upArray(arr){

}

//array of integers (negative/positive), no decimals
//positive, sing digit integers, no empty
//if invalid inputs, return null (negative, decimals)
//return an array with 1 added to value of array

// upArray( [2, 3, 9]) outputs [2,4,0]
// upArray([4,2,3,4]) outputs [4,2,3,5]



function upArray(arr){
  if(arr.length === 0){return null}
  for(let i = arr.length-1;i>=0;i--){
    if(arr[i]<0 || arr[i] > 9 || arr[i]===null || arr[i]===undefined){return null}
  }
  let count = 0
  for(let i = arr.length -1; i>=0;i--){
    if(arr[i] === 9){
      count++
      arr[i] = 0;
    }else{
      arr[i] += 1;
      break;
    }
  }
  
  if(count === arr.length){arr.unshift(1)}
  return arr
  }