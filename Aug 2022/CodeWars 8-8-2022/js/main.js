// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  //[72olle, 103doo, 100ya]
 str.split(' ').map(ele=>{
   return String.fromCharCode(Number(returnOnlyInteger(ele)))
 })
  }; 

  // string.charCodeAt(index)
  // String.fromCharCode(num1, num2, /* …, */ numN)
  //72olle -> 72ello
  //72olle -> H
  //no special characters, only letters and spaces
  //given a string
  //return it with the above decryption
  //separate each individual string element by integer and string
  //72olle -> 72, olle





function decipherThis(str) {
  //[72olle, 103doo, 100ya]
 return str.split(' ').map(ele=>{
return String.fromCharCode(Number(returnOnlyInteger(ele))) + returnOnlyString(ele)
 }).join(' ')
 //should return Hello good day
  }; 


function returnOnlyInteger(string){
return string.split('').filter(ele=>{
  if(ele>0 || ele<=0) return ele
}).join('')
}
//7,2,o,l,l,e

//This should return 72

function returnOnlyString(string){
let splitString = string.split('').filter(ele=>{
  if(!(ele>0 || ele<=0)) return ele
})
return splitString.map((ele,i)=>{
  if(i === 0){
    return ele = splitString[splitString.length-1]
  }else if(i === splitString.length-1){
    return splitString[i] = splitString[0]
  }else{
    return ele
  }
}).join('')
}
//7,2,o,l,l,e

//this should return ello