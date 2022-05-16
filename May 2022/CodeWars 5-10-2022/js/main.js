// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let count = {}
  for(let i =0;i<alphabet.length;i++){
  count[alphabet[i]] = 0
  let splited = string.split('')
  
  for(let index = 0;index<string.length;index++){
  if (splited[index].toLowerCase()===alphabet[i]){
    count[alphabet[i]] += 1
  }
  }
  }
  
  
  for(let keys in count){
    if(count[keys]===0){
      return false
    }
  }
  return true
  }

  function isPangram(string){
    string = string.toLowerCase()
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function(x){
      return string.indexOf(x)!== -1
    })
  }

  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }