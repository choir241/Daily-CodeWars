// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    return string.split('').filter(ele=>{
      if(ele !== 'e' && ele !== 'o' && ele !== 'i'&& ele !== 'a' && ele !== 'u'){
        return ele
    }
    }).join('')
    }
    
    //taking in a string
    //returning the string but removing all lowercase vowels
    //"hello"     -->  "hll"
    //"HELLO"     -->  "HELLO"
    
    //1. split the string into each character
    //2. check if the character is equal to a lowercase vowel
    //3. if it isn't, we want to add it to the new array
    //4. return the new array joined together as one string