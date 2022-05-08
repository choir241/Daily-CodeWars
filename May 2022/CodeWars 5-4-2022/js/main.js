// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let string = ''
  for(let i = 0;i<s.length;i++){
    if(i === 0){
      string += s[i].toUpperCase() + '-'
    }else if(i===s.length-1){
      string += s[i].toUpperCase()
      for(let index = 1;index<s.length;index++){
      string += s[i].toLowerCase()
      }
    }else{
      string += s[i].toUpperCase() 
      for(let index = 0;index<i;index++){
      string += s[i].toLowerCase()
      }
      string += '-'
    }
  }
  return string
}