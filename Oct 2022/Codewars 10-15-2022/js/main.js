// In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
// A camera takes a photo of a car if it moves to the direction of the camera.

// Task
// Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.

//cars to the right are >
//cars to the left are <
//cameras are ' . ' 
//cameras take photos of car if it moves towards the direction of the camera ie. > .

//taking in a string, no case sensitive
//return total number of photos taken by cameras


// return the total number of photos.
// it should return an integer
function countPhotos(road){
let picturesTaken = 0

}

//1. go through every character of the string
//2. if we see a dot, count how many arrows are pointing towards it
//2.5 Looking for > arrows at our left side, and < arrows for right side
//3. keep doing this until we reach the end of the string, making sure to add towards the total count
//4. return the final count number



// Examples
// For ">>." -> 2 photos were taken
// For ".>>" -> 0 photos were taken
// For ">.<." -> 3 photos were taken
// For ".><.>>.<<" -> 11 photos were taken


function countPhotos(road){
  let picturesTaken = 0
  for(let i = 0; i < road.length;i++){
  if(road[i]== '.'){
  picturesTaken += checkLeft(road,i)
  picturesTaken += checkRight(road,i)
  }
  }
  return picturesTaken
  }
  
  
  function checkRight(road,i){
    let picturesTaken = 0
  for(i;i< road.length;i++){
    if(road[i]== '<'){
      picturesTaken++
    }
  }
  return picturesTaken
  }
  
  
  function checkLeft(road,i){
    let picturesTaken = 0
  for(let index = i;index>=0;index--){
    if(road[index]== '>'){
      picturesTaken++
    }
  }
  return picturesTaken
  }



  function countPhotos(road){
    let picturesTaken = 0
    let rightCars = 0
    let result = 0
    for(let i = 0; i < road.length;++i){
    if(road[i]== '.'){
    result += rightCars
    picturesTaken+=1
    }else if(road[i]=='<'){
    result += picturesTaken
    }else if(road[i]=='>'){
    rightCars+=1
    }
    }
    return result
    }
    