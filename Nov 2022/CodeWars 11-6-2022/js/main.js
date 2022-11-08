// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
 let sum = 0
 for(let i = 0; i < marks.length; i++){
  sum += marks[i]
 }
 return Math.floor(sum/marks.length)
}

let getAverage = marks => Math.floor(marks.reduce((a,b)=>a+b,0)/marks.length)


//return average of array of integers ROUNDED DOWN to integer
//no empty arrays
//invalid/undefined/null/string/boolean?
//integers -> 0, -/+, no decimals

//getAverage([5,5]) -> 2
//getAverage([0,10,20,50]) -> 20
//getAverage(['get',0,12]) -> []

//array size can be from 1 to ?, so to get sum of all elements, for loop -> for()
//have a variable to store sum somewhere -> let sum = 0
//divide sum by amount of elements -> sum/array.length (array.prototype.length gives amount of elements in an array)
//we need to round down to nearest integer -> Math.ceil

