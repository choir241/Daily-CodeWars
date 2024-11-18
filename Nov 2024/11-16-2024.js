// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


function swap (string) {

    const newString = string.split("")
    const vowels = ["a", "e", "i", "o", "u"];
    
    for(let i = 0; i < newString.length; i++){
      if(vowels.includes(newString[i])){
        newString[i] = newString[i].toUpperCase();
      }
    }
  
    return newString.join("");
  }
  
  //when given string
  //capitalize all vowels
  
  //ie. Hello World!
  // should return HEllO WOrld!
  
  // Y is not a vowel
  
  // a e i o u
  // if any of the characters in the word are a vowel, we need to capitalize it
  // go through each character and check if it's a vowel
  // if it is a vowel, we capitalize it
  // otherwise we just ignore it
  // return the final string/word