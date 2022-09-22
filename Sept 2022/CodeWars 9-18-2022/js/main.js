// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  if(!array){return []}
   return array.map(ele=>{
     return -(ele)
   })
 }
 
 //take in an array of integers
 //convert positive to negative, negative to positive
 //don't mutate the array
 //if empty, return empty array