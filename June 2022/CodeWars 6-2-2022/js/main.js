// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

function twoSum(numbers, target) {
    for(let i = 0;i<numbers.length;i++){
      for(let index =0;index <= i;index++){
        if(index!== i){
      let sum = numbers[index] + numbers[i]
      if(sum === target){
        return [index,i]
      }
      }
    }
  }
    }

    
//array of numbers, and a target number
//2 different elements in the array that when added together, returns the target
//return indexes of the elements (index1, index2)
//will always be valid
//twoSum [1, 2, 3] 4 === (0, 2)