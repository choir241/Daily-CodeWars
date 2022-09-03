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
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  if(strarr.length === 0 || strarr.length < k || k <= 0){
  return ""
  }
  let concatenated = strarr.map((ele,i)=>
  {
    if(strarr[i+k-1]){
    let string = ''
    for(let index = i;index<i+k;index++){
      string += strarr[index] 
    }
    return string
    }
  })
  
  let joined = concatenated.join(' ').split('undefined').join().trim().split(' ')
  let lengths = joined.map(ele=>ele.length)
  return concatenated[lengths.indexOf(Math.max(...lengths))]
  }
  
  //array of strings and integer k
  //return first longest string with k number of consecutive strings
  // strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
  // treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
  // folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
  // trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
  // blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
  // abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
  // output folingtrashy
  //if string array length = 0, < k, or k <= 0, return ""
  
  //1, go through each element of the array
  //2. return a new array with the new concatenated strings based on k, along with the length of the concatenated string
  //3. go through new array, and find the first string with the largest length
  //4. return the longest conacatenated string