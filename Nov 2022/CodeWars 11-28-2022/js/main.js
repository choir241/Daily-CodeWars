// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:

// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

//make a function for fibonacci sequence

// let array = [0, 1]
// let first = 0
// let second = 1
// while(array[array.length-1] < i){
// array.push(array[first] + array[second])
// first++
// second++
// }

//return fibonacci

function fibonacci(max) {
  let array = [0, 1]
  let first = 0
  let second = 1
  while(array[array.length-1] < max){
  array.push(array[first] + array[second])
  first++
  second++
  }
  array.pop()
  let sum = 0
  array.forEach(ele=>{
    if(ele % 2 === 0){
      sum += ele
    }
  })
  return sum
  }