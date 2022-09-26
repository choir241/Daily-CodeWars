// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]

function multipleOfIndex(array) {
  let arr = []
    for(let i = 0;i<array.length;i++){
      if(array[i] % i == 0){
        arr.push(array[i])
      }
  }
    return arr
  }
  
  //take in an array of integers
  //return a new array of elements that are multiple of their own index
  //[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
  //1. go through each element of the array
  //2. check if the element is a multiple of its own index
  //3. return element if true
  //4. return the new array

  function multipleOfIndex(array) {
    return array.filter((ele,i)=>ele % i === 0)
  }