// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


//We're accepting a string containing space separated words
//ie. 'Hello world'
//Use the following rules to encrypt the string:
//The first letter must be converted to ASCII code
//ie. H -> 72
//The second letter must be switched with the last letter
//ie. hello -> holle
//no special characters or symbols
// string.charCodeAt(index)

//1. Go through each string element until we run out of string elements to go through
//2. Check if the index = 1 or index = string.length-1
//3. if true, then switch the values respective to the condition
//4. Replace first element with their repsective ASCII number
//5. Return the full string separated by space

//hello world -> [hello, world]
//return string.split(' ').map((ele,i)=>{
// if(i === 1){string[i] = string[string.length-1]}
 // else if(i ===string.length-1){string[i]= string[1]}
 //else{return ele}
//}
//}).map((ele,i)=>{
//if(i === 0){string.charCodeAt(i)}
//else{return ele}
//}).join(' ')

var encryptThis = function(text) {
    return text.split(' ').map(ele=>{
     return ele.charCodeAt(ele[0]) + stringOnly(ele)
   }).join(' ')
  }
  
  
  function stringOnly(string){
  let splitString = string.split('').filter(ele=>{
    if(!(ele>0 || ele<=0)) return ele
  })
  return splitString.map((ele,i)=>{
    if(i === 1){
      return ele = splitString[splitString.length-1]
    }else if(i === splitString.length-1){
      return splitString[i] = splitString[1]
    }else if(i!==0){
      return ele
    }
  }).join('')
  }