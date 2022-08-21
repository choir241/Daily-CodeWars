
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]
// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]


function multipleOfIndex(array) {
  let arr = []
 for(let i = 0;i<array.length;i++){
   if(array[i] % i == 0){
     arr.push(array[i])
   }
 }
 return arr
}

//take in array
//return new array multiple of own index
//ie. [22, -6, 32] -> can't divide by 0, but -6/1 = -6, and 32/2 = 16 so output is [-6, 16]
//1. go through each element of array
//2. check if they are multiple of own index
//3. return new array with new numbers
