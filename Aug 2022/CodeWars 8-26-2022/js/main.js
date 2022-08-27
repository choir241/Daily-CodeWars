// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if(beast[0]===dish[0] && beast[beast.length-1] === dish[dish.length-1]){
    return true
  }
    return false
  }
  
  //take in a string with white space
  //return boolean checking if food starts with first letter of beast, and ends with last letter of beast
  //great blue heron", "garlic naan -> true
  //brown bear", "bear claw -> false
  
  //1. check if the first letter of the animal is equal to the first letter of the food
  //2. check if the last letter of the animal is equal to the last letter of the food
  //3. if both are true, return true
  //4. else return false