// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
    // your code
    return (-1);
}

function findNb(m) {
    let cubes = 0
    let sum = 0
      for(let i = 1;i<100000;i++){
     sum+= Math.pow(i,3)
     cubes++
     if(sum === m){
       return cubes;
     }
  }
    if(cubes===99999){return -1}
  }
  
  //pile of n cubes
  //cube on bottom will have volume of n^3
  //cube above it will have volume of (n-1)^3
  //top will have volume of 1^3
  //Given the total volume m in integer form
  //return number of cubes that will be used to build
  //if n doesn't exist, return -1
  //2022 ^ 3 (bottom)
  //2021 ^ 3 (second-to-bottom)
  //... 1 ^ 3
  //1. go from 1 to 10000
  //2. everytime we go up by one, we increase the cube amount by 1 
  //3. if(1 ^ 3) + (2 ^ 3) ... is equal to m, return the cube amount
  //4. else, we return -1