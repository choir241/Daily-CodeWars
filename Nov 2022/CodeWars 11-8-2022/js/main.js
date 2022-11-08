// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a){
let vowels = [97,101,105,111,117]
for(let i = 0; i < a.length; i++){
  if(vowels.includes(a[i])){
    a[i] = String.fromCharCode(a[i])
  }
}
return a
}

let isVow = a => {
  let vowels = [97,101,105,111,117]
return a.map(ele=>{
  if(vowels.includes(ele)){
    return ele = String.fromCharCode(ele)
  }
})
}


let isVow = a => {
  let vowels = [97,101,105,111,117]
return a.map(ele=>vowels.includes(ele) ? ele = String.fromCharCode(ele) : ele)
}

// array numbers
//check if character codes for lower case vowels (not y)
//if yes, change value to string
//positive integers
//invalid/undefined/null/boolean/string

//return array with changed numbers

// isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])
// [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]

// loop to go through every element of the array
// variable vowels of [97,101,105,111,117] check for vowels
// String.fromCharCode() to convert from character code to string
// 97 a
// 101 e
// 105 i
// 111 o
// 117 u
// if(vowels.includes(array[i])) checks if the element is in vowel array
// if it is, then array[i] = String.fromCharCode(array[i])
// return a