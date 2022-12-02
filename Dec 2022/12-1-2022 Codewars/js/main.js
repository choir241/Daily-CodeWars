// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1


function digitalRoot(n) {
    // ...
  }

  //take the sum of digits of n
  //keep doing this until we return an integer of single digit number

  //positive non-decimals
  //undefined/null/0 -> 0
  //no boolean/no strings

  //digitalRoot(29) -> 2 + 9 = 11 -> 1 +1 = 2
  //digitalRoot(0) -> 0
  //digitalRoot(180) -> 1 + 8 + 0 = 9


  //keep looping until the length of digits is only 1 digit if(n>10)
  //let splited = n.split('')
  //n = 0
  //splited.forEach(ele=>n+=Number(ele))

  function digitalRoot(n) {
    while(n > 9){
      let splited = n.toString().split('')
      n = 0
      splited.forEach(ele=>n+=Number(ele))
    }
    return n
  }


  n = 1 + ( (n - 1) % 9 )

  function digitalRoot(n){
return 1 + ((n-1) % 9)
  }