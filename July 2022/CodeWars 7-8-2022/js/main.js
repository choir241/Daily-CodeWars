// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const position = {}
    
    alphabet.split('').forEach((ele,i)=>{
      i++
      position[ele] = i
    })
    let array = []
    for(let i =0;i<text.length;i++){
    array.push(position[text[i].toLowerCase()])
    }
    
    array = array.filter(ele=>{
      if(ele!==undefined){
        return ele
      }
    })
    return array.join(' ')
    
    
    }
    
    //take in a sentence of string
    //return a string of numbers representing position of character in alphabet
    //alphabetPosition("The sunset sets at twelve o' clock.")
    // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    //loop through alphabet and set position number for each character (object literal)
    //loop through string and output position number (array)
    //remove undefined (non-strings)
    //return numbers with space in between as string