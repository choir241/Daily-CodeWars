function toCsvText(array) {
  let string = ''
  array.forEach((ele,i)=>{
    if(i!==array.length-1){
      string += ele + '\n'
}else{
  string += ele
}
  })
  return string
}

function toCsvText(array){
  return array.reduce((acc,curr,i)=>{
    if(i!=array.length-1){
    return acc+curr+'\n'
    }else{
    return acc+curr
    }
  },"")
}

let toCsvText = array => array.reduce((acc,curr,i)=>i!=array.length-1 ? acc+curr+'\n' :acc+curr,"")

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.

// More details here: https://en.wikipedia.org/wiki/Comma-separated_values


//input is an array of subarrays
//return as string with each array represented by "\n and +"

//1. go through every element of the array
//2. get last element of each subarray (ele[ele.length-1])
//3. add the necessary string '\n'
//4. if index is not 0 (the first subarray) 
//5. add '+' to the first element as well (ele[0])
//return the final string
