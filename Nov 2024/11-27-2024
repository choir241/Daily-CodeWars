// Description:
// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
  const primes = [];
  
  for(let i = 2; i <= num; i++){
    if(isPrime(i)){
      primes.push(i)
    }
  }
  
  return primes;
}

// given a number
// return a array of numbers
// from 0 - number
// that are prime numbers

// we need to identify what a prime number is
// prime is a number that is only divisible by itself and 1 and no other number

function isPrime(num){
  if (num === 2){
    return true;
  }
  
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  
  return true;
}
