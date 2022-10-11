//sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


function sortByLength (array) {
    return array.sort((a,b)=>a.length - b.length)
    };
    
    //take in an array of strings
    //sort them by the string lengths
    //return the new array of strings
    
    //1. array.sort
    //2. sort by element length only
    //3. return the element
    //4. return the array