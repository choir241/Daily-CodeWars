// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

// Create a function called args_count that returns the number of arguments provided
function args_count(...n){
  if(!n){return 0}
  let array = [...n]
  return array.length
  }