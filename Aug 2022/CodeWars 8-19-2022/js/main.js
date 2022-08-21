// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) { 
    let word = string.split('')
  for(let i = string.length-1;i>=0;i--){
    if(string[i]!=='!'){
    word.splice(i+1,string.length)
    break;
    }
  }
    return word.join('')
  }