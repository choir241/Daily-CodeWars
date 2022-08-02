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
	let count = 0
arr.forEach((ele,i)=>{
		console.log(ele)

if(ele.length===3){
	if((ele[0]===':'||ele[0]===';') && (ele[2]=== ')' || ele[2]==='D') && (ele[1]==='-' || ele[1]==='~')){
		count++
	}
}else if(ele.length===2){
	if((ele[0]===':'||ele[0]===';') && (ele[1]=== ')' || ele[1]==='D')){
		count++
	}
}
})
return count
}
//taking in an array of symbols of strings
//return total number of smiling faces returning integer
//must contain valid pair of eyes, marked as : or ;
//valid nose are - or ~, is optional
//must have a smiling mouth ) or D
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
//if empty, return 0
//.join('').split('').forEach(ele=>if(ele.length === 3){
//
//})