// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  if(arr.length < 1){return 0}
    let sum = 0
  arr.forEach(ele=>{
    if(ele.length == 3){
        if((ele[0] == ':' || ele[0] == ';') && (ele[2] == 'D' || ele[2] == ')') && (ele[1] == '~' || ele[1] == '-')){
          sum++
        }
    }else if(ele.length == 2){
        if((ele[0] == ':' || ele[0] == ';') && (ele[ele.length-1] == 'D' || ele[ele.length-1] == ')')){
        sum++
        }
    }
  })
    return sum
  }
  
  
  //given an array of emoji strings
  //return the total number of smiling faces
  // 1. Must contain : or ;
  // 2. can have a nose but it does not have to - or ~
  // 3. Must have  ) or D
  //empty array return 0
  
  //1. account for empty array
  //2. go through every element in array
  //3. check if the element follows the above conditions
  //4. if it does, add to a total variable count amount
  //5. return the count