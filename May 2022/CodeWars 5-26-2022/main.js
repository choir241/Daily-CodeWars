// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

let persistence = (num,count = 0) => {
    num = num.toString().split('')
    while(num.length>1){
    num = num.reduce((a,b)=>Number(a)*Number(b),1)
    count++
    num = num.toString().split('')
    }
    return count
    }
    //positive number
    //returning a number, amount of times until you reach single digit by multiplying the 2 numbers together
    //persistence(39) = 3
    //persistence(999) = 4
    //check num length
    //if greater than 1, split it
    //multiply together
    //redefine variable value to new value
    //increase count variable by 1
    //keep looping until variable value is only 1 digit