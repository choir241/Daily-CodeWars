// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// For ASCII table, you can refer to http://www.asciitable.com/

let getChar = c => String.fromCharCode(c)

//take in number
//return ASCII char for that value
//get_char(65) -> 'A'
//"\n".charCodeAt(0);

// console.log(getChar(65))