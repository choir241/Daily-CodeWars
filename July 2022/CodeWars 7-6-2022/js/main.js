// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


let removeEveryOther = arr =>arr.filter((ele,i)=>{if(i % 2== 0){return ele}})



//take in array
//return the array but remove every other element
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//arr.filter((ele,i)=>if i % 2 !== 0)