// Back and forth and reverse

// DESCRIPTION:
// Task
// A list S will be given. You need to generate a list T from it by following the given process:

// Remove the first and last element from the list S and add them to the list T.
// Reverse the list S
// Repeat the process until list S gets emptied.
// The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

// Example
// S = [1,2,3,4,5,6]
// T = []

// S = [2,3,4,5] => [5,4,3,2]
// T = [1,6]

// S = [4,3] => [3,4]
// T = [1,6,5,2]

// S = []
// T = [1,6,5,2,3,4]
// return T
// Note
// size of S goes up to 10^6
// Keep the efficiency of your code in mind.
// Do not mutate the Input.


//remove first and last element from s and add to t
//reverse s
//repeat until s is empty
//don't mutate s array


function arrange(s) {
  let array = []
  let copyOfS = s
  while(copyOfS.length){
    array.push(copyOfS.shift(),copyOfS.pop())
    copyOfS.reverse()
  }
   if(!(array[array.length-1])){array.pop()}
   return array
 }
 
 //remove first and last element from s
 //add them to an new array
 //reverse s
 //keep going until s is empty
 //don't mutate s


 function arrange(s) {
  let res = []
  ,     i = 0
  ,     j = s.length -1
while (i <= j){
  if(Math.ceil(res.length / 2) % 2){
  res.push(s[j])
  j--
  }else{
    res.push(s[i])
    i++
  }
}
  return res;

}