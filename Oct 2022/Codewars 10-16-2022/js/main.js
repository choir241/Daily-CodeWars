// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//an array of numbers, all are duplicates except one
//will always contain at least 3 numbers, no invalids/empty arrays
//return a number
//looking for different number specific 
//performance is important

//findUniq([0,0,0,0,0,99]) -> 99
//findUniq([33,33,33,33,-12]) -> -12

//for loop
//let duplicates = []
//indexOf(duplicates) === -1
//array.push duplicates
//return the number otherwise

function findUniq(arr) {
  let filtered = arr.filter((ele,i)=>{
  if((i!==0) && (i!== arr.length-1)){
    if((ele != arr[i+1]) && (ele != arr[i-1])){
      return ele
    }
  }else if(i == 0){
    if((ele !== arr[i+1]) && (ele !== arr[i+2])){
      return ele
    }
  }else if(i == arr.length -1){
    if((ele !== arr[i-1]) && (ele !== arr[i-2])){
      return ele
    }
  }
  
  })
  
  return filtered[0] ? filtered[0] : 0                        
  }