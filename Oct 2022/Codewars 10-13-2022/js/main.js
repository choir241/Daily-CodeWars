// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  let duplicateCount = {}
    let wordSplit = word.split('')
  wordSplit.forEach(ele=>duplicateCount[ele.toLowerCase()] = 0)
  wordSplit.forEach(ele=>duplicateCount[ele.toLowerCase()]++)
  return wordSplit.map(ele=>{
    if(duplicateCount[ele.toLowerCase()]===1){
      return '('
    }else{
      return ')'
    }
  }).join('')
  
}

//string input
//each character in the new string is either ( or )
//( for characters that only appear once, and ) for characters that appear more than once
//ignore capitalization

//convert the string into an array
//go through every element of the array
//have a way to check for duplicates -> have an object to account for the count of characters
//replace the characters with the appropriate parenthesis
//return the now converted array into string
