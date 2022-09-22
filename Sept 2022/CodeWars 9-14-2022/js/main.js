// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  function countPositivesSumNegatives(input) {

    if(input == null){return []}
      let positiveCount = 0;
      let negativeCount = 0;
    for(let i = 0;i<input.length;i++){
        input[i] > 0 ? positiveCount++ : negativeCount+= input[i]
    }
      
    if(positiveCount == 0 && negativeCount == 0) {return []}
    return [positiveCount,negativeCount]  
    
    }
    //given an array of integers
    //return an array, first element is count of positive numbers, and second element is the sum of negative numbers
    //0 is considered neither negative or positive
    //if empty array or null, return []
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
    // 1. for(loop) to go through every integer of the array
    // 2. set to variables outside of conditionals called positiveCount and negativeCount and set them both to 0
    // 3. have conditional ternary statement check if each element is either positive or negative, and add to the respective variables
    // 4. return the new array
}