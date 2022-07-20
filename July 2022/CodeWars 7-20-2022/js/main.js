// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string
function mxdiflg(a1, a2) {
    if(a1.length < 1|| a2.length < 1){return -1}
      let array = []
      for(let i = 0;i<a1.length;i++){
          for(let index=0;index<a2.length;index++){
  array.push(Math.abs(a1[i].length-a2[index].length))
          }
      }
      return Math.max(...array)
  }
  
  //2 arrays of strings, from a to z
  //x = any string in first array
  // y = any string in second array
  // find max(abs(length(x) − length(y)))
  //if empty return -1
  // let a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
  // let a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  // console.log(mxdiflg(a1, a2))
  // let name = 'cccooommaaqqoxii'
  // console.log(name.length)
  //name.length - a1[2].length = 13
  //for loop, loop nested within loop, make new array with all differences between lengths of a1 elements and a2 elements
  