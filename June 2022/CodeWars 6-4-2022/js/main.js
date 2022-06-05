// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0){return ''}
    else{
    let concate = strarr.map((ele,i)=>{
     let key = k + i - 1
      let string = ''
      while(i<=key){
        if(strarr[i]!==undefined){
     string += strarr[i]
        }
        i++
      }
    
    return string
    //ele each element
    //i is index
    //''
    //tree
    //treefoling
    //treefolingtrashy
    //foling
    //folingtrashy
    //arrar[i] go through each ele of array
    //let count += 1 every time you add a string
    //until i array[i]
    })
    
    let lengths = concate.map(ele=>{
      return ele.length
    })
    
    return concate[lengths.indexOf(Math.max(...lengths))]
    
    
    }
    
    
    
    }
    
    //array of strings, integer k
    //return first longest string when concated with k number of consectutive strings
    // ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2, outputs folingtrashy
    //longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
    //if (strarr.length = 0 || k > strarr.length || k <= 0) return ''
    //strarr.map
    
    // console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"],3))