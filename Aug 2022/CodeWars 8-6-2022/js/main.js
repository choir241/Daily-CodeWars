// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let array = []
  
  for(let i =0;i<message.length;i++){
    if(!(alphabet.includes(message[i])) && !(ALPHABET.includes(message[i]))){
       array.push(message[i])
  }
  else if(message[i]===message[i].toLowerCase()){
  let currentIndex = alphabet.indexOf(message[i])
  let newIndex = currentIndex += 13
  if(newIndex >= 26) {newIndex -= 26}
  array.push(alphabet[newIndex])
      }else{
  let currentIndex = ALPHABET.indexOf(message[i])
  let newIndex = currentIndex += 13
  if(newIndex >= 26) {newIndex -= 26}
  array.push(ALPHABET[newIndex])
      }
  }
  return array.join('')
  }