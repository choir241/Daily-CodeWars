// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let array = []
for(let index = 0; index< str.length;index++){
  for(let i = 0;i<alphabet.length;i++){
		if(str[index]===alphabet[i]){
				array.push(str[index])
		}
	}
}
return array.reverse().join('')

}
