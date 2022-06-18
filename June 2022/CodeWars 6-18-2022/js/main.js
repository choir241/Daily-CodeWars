// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

let find_average = array => {
    if(array.length < 1)return 0
    if(array){
      return array.reduce((a,b)=>a+b)/array.length
    }
  }
  
  //take in an array of integers
  //return a number that is average of numbers
  //empty should return 0
  //(find_average([1,1,1]), 1)
  // (find_average([1,2,3]), 2)
  // (find_average([1,2,3,4]), 2.5)
  