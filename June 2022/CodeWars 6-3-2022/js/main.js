// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    const count = {}
  word.split('').forEach(ele=>{count[ele.toLowerCase()] = 0 })
  word.split('').forEach(ele=>{
    for(let keys in count){
      if(keys === ele.toLowerCase()){
        count[keys]+=1
      }
    }
  })
  return word.split('').map(ele=>{
  if(count[ele.toLowerCase()]>1){
    ele = ')'
    return ele
  }else{
    ele = '('
    return ele
  }
  }).join('')
  }
  
  //get a string
  //return a new string, each character is "(" onlyi if it appears once
  //but if appears more than once, than ')'
  //ignore capital
  //"din"      =>  "((("
  // "recede"   =>  "()()()"
  // "Success"  =>  ")())())"
  // "(( @"     =>  "))((" 