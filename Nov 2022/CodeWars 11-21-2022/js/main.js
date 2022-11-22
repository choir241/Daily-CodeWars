// DESCRIPTION:
// Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

// The next number that experiments this particular behaviour is 370 with the same power.

// Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

// eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

// Let's see some cases:

// eqSumPowdig(100, 2) ----> []

// eqSumPowdig(1000, 2) ----> []

// eqSumPowdig(200, 3) ----> [153]

// eqSumPowdig(370, 3) ----> [153, 370]
// Enjoy it !!


function eqSumPowdig(hMax, exp) {
    let arr = []
  for(let i = 2; i <= hMax; i++){
  if(getExp(i,exp) === i){arr.push(i)}
  }
    return arr
  }
  
  function getExp(num,exp){
  let sum = 0
  num = num.toString().split('')
  for(let i = 0;i<num.length;i++){
    sum += Math.pow(num[i],exp)
  }
  return sum
  }
  
  // 2 integers as paramater
  // first is max range inclusive
  // second is exponent
  
  //return numbers that fulfills conditions
  //sum of all digits to the 3rd power equals the number
  
  //for loop, from 2 to max
  //function that takes apart integers, does the 3rd power, sum together
  //