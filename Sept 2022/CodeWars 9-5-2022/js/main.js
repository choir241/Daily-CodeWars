// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let pairs = []
  let pair = ''
  for(let i = 0;i<str.length;i++){
    if(str.length % 2 == 0){
       pair += str[i]
    if(pair.length == 2){
      pairs.push(pair)
      pair = ''
    }
}else if(str.length % 2 != 0){
       pair += str[i]
    if(pair.length == 2){
      pairs.push(pair)
      pair = ''
    }
 if(i == str.length - 1){
 pair += '_'
 pairs.push(pair)
 }
}
  
  }
 return pairs
}

//given a string
//return the string as an array separated into pairs
//if odd amount of characters, add an underscore to the last pair
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//check the length of the string
//set a variable equal to pair
//add elements to variable until pair variable length is equal to 2
//add the variable value to the array then reset the variable to empty string
//return array
//if length of string is odd, make sure  the last string pair gets an underscore