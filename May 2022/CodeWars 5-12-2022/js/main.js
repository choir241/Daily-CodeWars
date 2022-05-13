// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  const centuries = []
  for(let i = 1;i <= year;i+=100){
  centuries.push(i)
  }
  
  for(let i =centuries.length-1;i>=0;i--){
    let century = centuries[i]
  if(year>=century){
  return centuries.indexOf(century) + 1
  }
  }
  }

  //1st century: year 1- 100 2nd century year 101 - 200, etc
//PREP
//parameters // number positive whole
//return // number return
//examples
//pseudo code

// function century(year) {
  //for(from year min to year max)
  //if(year is in range between (inclusive) min and max)
    //return respective century pertaining to year
  //   return;
  // }
  
  //century(2000) -> 20
  //century(1900) -> 19
  //century(1800) -> 18