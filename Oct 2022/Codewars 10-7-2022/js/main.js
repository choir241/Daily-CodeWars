//Equal side of an array

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.


function findEvenIndex(arr)
{
  //Code goes here!
}

//array of integers, no decimals, negative/positive integers, no empty arrays
//find index n where sum of integers left at index n is equivalent to sum of integers right at index n
//return -1 if this doesn't exist
// 0 < arr < 1000
//return lowest index where this is true

// findEvenIndex([1,2,3,4,3,2,1]) return 3
// findEvenIndex([3,4,1,2]) return 1

// going through every element of the array - for loop
// indices before the element and sum the numbers
    
for(let i = 0; i < arr.length; i++ ){
    arr[i]
    1
    2
    3
    4
    3
    2
    1
}


// indices after the element and sum the numbers
// if these are equal to each other, return the index
// if none of these prove true, return -1
// return that index


function findEvenIndex(arr)
{
let arrayIndex;
for(let i = 0; i < arr.length; i++ ){
  let sumLeft = 0
  let sumRight = 0
    for(let index=0; index<arr.length; index++){
      if(index < i){
        sumLeft += arr[i]
      }else if(index > i){
        sumRight += arr[i]
      }
    }
    if(sumLeft == sumRight){
      arrayIndex = i
      break;
      }
  //  0 1 2+3+4+3+2+1
  //  1 1+2 4+3+2+1
  //  2 1+2+3 3+2+1
  //  3 1+2+3+4 2+1
  //  4 1+2+4+3+2 1
}
    return arrayIndex
}



function findEvenIndex(arr)
{
let arrayIndex;
for(let i = 0; i < arr.length; i++ ){
  let sumLeft = 0
  let sumRight = 0
    for(let index=0; index<arr.length; index++){
      if(index < i){
        sumLeft += arr[index]
      }else if(index > i){
        sumRight += arr[index]
      }
    }

    if(sumLeft == sumRight){
      arrayIndex = i
      break;
      }
  //  0 1 2+3+4+3+2+1
  //  1 1+2 4+3+2+1
  //  2 1+2+3 3+2+1
  //  3 1+2+3+4 2+1
  //  4 1+2+4+3+2 1
}
  return arrayIndex ? arrayIndex : -1
}





function findEvenIndex(arr)
{
let arrayIndex = '';
for(let i = 0; i < arr.length; i++ ){
  let sumLeft = 0
  let sumRight = 0
    for(let index=0; index<arr.length; index++){
      if(index < i){
        sumLeft += arr[index]
      }else if(index > i){
        sumRight += arr[index]
      }
    }

    if(sumLeft == sumRight){
      arrayIndex = i
      break;
      }
  //  0 1 2+3+4+3+2+1
  //  1 1+2 4+3+2+1
  //  2 1+2+3 3+2+1
  //  3 1+2+3+4 2+1
  //  4 1+2+4+3+2 1
}
  return arrayIndex !== '' ? arrayIndex : -1
}