// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays == null || arrayOfArrays.length < 1){return 0}
  for(let i = 0;i<arrayOfArrays.length;i++){
    if(arrayOfArrays[i]==null || arrayOfArrays[i].length < 1){
return 0
    }
  }
  let sortedArray = arrayOfArrays.sort((a,b)=>{
    return a.length-b.length
  })
  let arrayOfLengths = sortedArray.map(ele=>ele.length)
  for(let i = 0;i<arrayOfLengths.length; i++){
    if(arrayOfLengths[i+1]-arrayOfLengths[i] !== 1){
      return arrayOfLengths[i]+1
    }
  }
}

//receive an array with sub arrays in it
//if you sort the array, you'll find a missing length in the consecutive order
//ie. length = 1, length = 2, length = 3, length = 5
//missing is 4, so we return 4 here
//if the array is null/empty, return 0

//1. sort the array of arrays by their lengths
//2. find the missing length
//3. return that length integer