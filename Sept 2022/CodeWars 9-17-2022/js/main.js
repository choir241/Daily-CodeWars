// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
  let numOfPeople = 0
  busStops.forEach(ele=>{
    numOfPeople += ele[0]
    numOfPeople -= ele[1]
  })
    return numOfPeople
  }
  
  //array of subarrays with integer pairs
  //first element are people going into the bus, second element are people leaving the bus
  //return the number of people remaining on the bus
  //number of people >= 0
  
  //1. set variable representing total people on bus
  //2. go through each array
  //3. add to the variable if the index is 0, subtract from the variable if the index is 1
  //4. return the count