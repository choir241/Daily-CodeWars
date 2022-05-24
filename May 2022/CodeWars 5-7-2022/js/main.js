// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str){
    let arr = []
  let array = str.split(' ')
  for(let i = 0;i<array.length;i++){
    for(let index = array[i].length;index>=0;index--){
   arr.push(array[i][index])
    }
    arr.push(' ')
  }
  return arr.join('').trim()
  }


  function reverseWords(str){
      return str.split(' ').map(function(word){
          return word.split('').reverse().join('')
      }).join(' ')
  }

  let reverseWords = str => str.split('').map(word=>word.split('').reverse().join('')).join(' ')