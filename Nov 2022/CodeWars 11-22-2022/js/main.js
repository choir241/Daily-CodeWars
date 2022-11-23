// DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(collection) {
  // Do your magic. :)
}

//find the most ocurring element in the array
//return the number of occurances
//return 0 if array is empty

function mostFrequentItemCount(collection) {
  if(!collection.length){return 0}
  let count = {}
  collection.forEach(ele=>count[ele] = 0)
  collection.forEach(ele=>count[ele]++)
  let occurances = Object.values(count)
 return Math.max(...occurances)
}