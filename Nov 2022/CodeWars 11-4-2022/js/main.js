// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){

}


// array of integers
// no decimals
//positives, negatives or 0?
//strings, booleans, invalid, undefined, empty array?

//grow([0,212,32,22]) -> 0
//grow([-12,2,2,3,-9]) -> 1296
//grow([1,1,1,1,1,1,1]) -> 1
//grow([]) -> []
//grow(['melt','is','cute']) -> []

//array can be any size -> for loop
//variable representing total product -> let product = 1 (1 because 0 would always produce 0)
//multiply every element of the array -> product *= x[i]
//return the final product -> return product

function grow(x){
  let product = 1
  for(let i = 0; i <x.length; i++){
    product *= x[i]
  }
  return product
}

let grow = x => x.reduce((a,b)=>a*b,1)
