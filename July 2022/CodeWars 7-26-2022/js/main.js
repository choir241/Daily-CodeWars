// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    return Number(num.toString().split('').map(ele=>Math.pow(ele,2)).join(''))
  }

  //square every digit of a number and concatentate them
  //accepting an integer and we are returning an integer
  //squareDigits(9119) -> 811181
  //squareDigits(2002) -> 4004
  //squareDigits(6108) -> 361056
  //num.toString().split('').map(ele=>{
    //Math.pow(ele,2)
  //}).join('')