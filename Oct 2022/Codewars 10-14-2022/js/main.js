// DESCRIPTION:
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1,array2){
  let arr = array1.filter(ele=>{
    for(let i = 0; i<array2.length;i++){
    if(array2[i].includes(ele)){
    return ele
    }
    }
  })
return arr.sort()

//1. is it a substring of array2 -check
//2. if so, what is the position of the string in array2?
//3. based on the location relevant to the other substrings, sort array1
}

//2 arrays of strings (case sensitive?)
//null/invalid/undefined/empty arrays?
//return an array where the strings are sorted based on lexical order of a2
//(strings of array1 substrings of array2)
//if none of array1 are substrings of array2, return empty array

// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]


// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

//go through each element of array 2
//if any of the strings in array 2 contain any of the strings of array 1
//return the index of array 1 based on when it appears in array 2
//sort the order of array 1
//return the the new arrayx