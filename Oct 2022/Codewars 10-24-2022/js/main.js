// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  let array = []
  for(let i = 0;i<stringarray.length;i++){
    array.push(Number(stringarray[i]))
  }
  return array
}

function toNumberArray(stringarray){
  return stringarray.map(ele=>Number(ele))
}

let toNumberArray = stringarray => stringarray.map(ele=>Number(ele))


//array of integers/decimals as strings
//return the array as integers types instead


// toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])
//array.prototype.map()
//Number()