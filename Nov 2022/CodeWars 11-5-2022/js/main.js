// DESCRIPTION:
// Given a non-empty array of integers, find the maximum product of elements from all available sequences.
// A sequence here is any pattern in which the elements are equally spaced apart in the array.
// The sequence should start at its place in the array: for example, the sequence of 3 elements apart should start at the third element.
// Example:

// Given the array [11, 6, -2, 0, 5, -4, 2]
// When the sequence is 1 element apart: Product = 11 × 6 × (-2) × 0 × 5 × (-4) × 2 = 0.
// When the sequence is 2 apart: Product = 6 × 0 × (-4) = 0.
// When the sequence is 3 apart: Product = (-2) × (-4) = 8.
// When the sequence is 4 apart: Product = 0
// When the sequence is 5 apart: Product = 5
// When the sequence is 6 apart: Product = -4.
// When the sequence is 7 apart: Product = 2.
// So, the function should return 8.


function findMaxProduct(arr){
  let array = []
    let increment = 1
  for(let index = 0; index < arr.length; index++){
  let product = 1
  for(let i = 0; i < arr.length; i+=increment){
    product *= arr[i]
  }
  array.push(product)
  }
  return Math.max(...array)
  }


  function findMaxProduct(arr){
    let array = []
      
    for(let index = 0; index < arr.length; index++){
    let product = 1
    for(let increment = index; increment < arr.length; increment++){
      product *= arr[increment]
    }
    array.push(product)
    }
    return array
    return Math.max(...array)
    }
    
    console.log(findMaxProduct( [11, 6, -2, 0, 5, -4, 2]))

//Not empty array of integers
//no decimals, 0, negatives/positives
//invalid/undefined/null, string, boolean
//return the largest products from the possible sequences

//go through each element -> for loop (from 0 to increment)
//add 1 to increment
//find the product of each sequence -> let product = 1, for loop (from 0 to array.length)
//get the final array of all possible products -> let array = []
//return the maximum possible product -> return Math.max()
 

// When the sequence is 1 element apart: Product = 11 × 6 × (-2) × 0 × 5 × (-4) × 2 = 0.
//  0 1 2 3 4 5 6 +1
// When the sequence is 2 apart: Product = 6 × 0 × (-4) = 0.
// 1 3 5 +2
// When the sequence is 3 apart: Product = (-2) × (-4) = 8.
// 2 5 8 +3
// When the sequence is 4 apart: Product = 0
// 3 7 +4
// When the sequence is 5 apart: Product = 5
// 4 9 +5
// When the sequence is 6 apart: Product = -4.
// 5 11 +6
// When the sequence is 7 apart: Product = 2.
// 6 13 +7

console.log(findMaxProduct(  [11, 6, -2, 0, 5, -4, 2]))


function findMaxProduct(arr){
  let increment = 1
  let array = []
for(let i = 0; i < arr.length; i++){
    let product = 1
 //i is the first element of the sequence
  for(let index = 0; index < arr.length;index+=increment){
    if(arr[i+index]!==undefined){
   product *= arr[i+index]
    }
  }
  array.push(product)
//   0 1 2 3 4 5 6
//   1 3 5
//   2 5
//   3
//   4
//   5
//   6
//   7
increment+=1
}
return Math.max(...array)
}
