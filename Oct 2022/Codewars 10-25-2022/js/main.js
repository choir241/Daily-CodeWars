// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

// Nth Smallest Element (Array Series #4)

// Task
// Given an array/list of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2 
// arr=[15,20,7,10,4,3]   n=3    ==> return 7 
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
// arr=[2,1,3,3,1,2],     n=3    ==> return 2 


function nthSmallest(arr, pos){
  //your code here
}

//array of integers
//find the nth smallest element in the array
//array will always be at least 3 length
//positives/negatives/zeros
//duplicates in array
//invalid arrays [], undefined, null []
//no float numbers
//pos <= arr.length and >= 0

//nthSmallest(arr, pos) let arr = [5,4,3,2,1] pos = 3 -> 3 
//nthSmallest(arr, pos) let arr = [0, -20, 10, 4] pos = 4 -> 10 
//nthSmallest(arr, pos) let arr = [] pos = 3 -> []

//for loop -> sort the numbers
//let sortedArr = []
//nested for loop are any of the other elements greater than the current element
//if yes, then push it

//return sortedArr[pos-1]

function nthSmallest(arr, pos){
  let sortedArr = arr.sort((a,b)=>{
    return a-b
  })
    return sortedArr[pos-1]
  }