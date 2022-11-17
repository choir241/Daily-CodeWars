// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)
// All tests for this Kata are randomly generated.

// test([1, 2, 2, -1], 4);
// test([1, 2, 1, 5], 3);
// test([1, 1, 1, 1], 4);
// test([1, -1], -1);
// test([-3], 1);

//1. where is the frog going (left/right)
//2. how far does the frog go?
//3. repeat 1-2 until frog comes out
//4. we need a way to find out if frog can't escape


function solution(a) {
  // Your code here
}

//index will tell you direction of jump and the length of the jump
//how many jumps are needed to exit out of the array

//-1 if not possible
//input will be an array
//the integer in the array represents the number of jumps and direction
//start from index 0

//we have to go through all the elements of the array
//but the increments here dynamic
//depending on +/-, change where the frog goes (or the loop)
//have a way to determine if the frog can't escape


function leap(a){
  let jumps = 0
  let leap = 1
  let length = a.length
  let i = 0
  while(i < length){
  if(a[i]>0){
    leap = a[i]
    jumps++
  }else if(a[i]<0){
    leap = a[i]
    jumps++
  }
  i+=leap
  }
  return jumps
  }
  
  console.log(leap([1, 2, 2, -1]))
  //0. how many total jumps did it take to escape
  //1. where is the frog going (left/right)
  //2. how far does the frog go?
  //3. repeat 1-2 until frog comes out
  //4. we need a way to find out if frog can't escape
  //5. 



  function solution(a) {
    let c = 0; let i = 0;
    while(a[i]!=undefined){
  c++
  i+=a[i]
  
      if(c > a.length){
        return -1
      }
    }
    return a.length ? c : -1
  }