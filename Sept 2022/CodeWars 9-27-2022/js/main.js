// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascend = 0
  let descend = 0
for(let i = 0; i< array.length-1;i++){
  if(array[i] < array[i+1]){
    ascend+=1
  }else if(array[i] > array[i+1]){
    descend+=1
  }
}
if(ascend !== 0 && descend !== 0){return 'no'}
else if(ascend !== 0){return 'yes, ascending'}
else{return 'yes, descending'}


}