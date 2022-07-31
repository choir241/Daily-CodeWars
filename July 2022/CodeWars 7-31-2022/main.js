// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

let smallEnough = (a, limit) => a.every(ele=>ele <= limit)

//given an array and limit value
//check if ALL values in array are <= limit value
//if yes, return true, else return false
// smallEnough([66, 101], 200), true
// smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false
//a.every((ele)=>{
//return ele <= limit 
//})