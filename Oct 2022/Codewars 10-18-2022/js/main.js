// Tribonacci Sequence

// DESCRIPTION:
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]


//if starting sequence was [1,1,1]
//take the last three elements, sum them together, and you get the next element in the tribonacci
//we'd get 3, 5, 9, ...
//given an array representing the starting sequence and n elements representing how many of the ribonacci we need to return
//return the respective tribonacci as an array
//array will always have 3 ositive numbers
//if n = 0, return an empty array
//decimals?

function tribonacci(signature,n){
  //your code here
}

// [ [1,1,1], 10] -> [1,1,1,3,5,9,17,31,57,105]
// [ [0,0,1], 10] -> [0,0,1,1,2,4,7,13,24,44]

//let tribonacci = signature
//while(tribonacci.length < n){
  
//}
//let nextSequence = tribonacci[tribonacci.length-1] + tribonacci[tribonacci.length-2] + tribonacci[tribonacci.length-3] 
//tribonacci.push(nextSequence)
//return tribonacci
//does not account for n = 0, n = 1, or n = 2


function tribonacci(signature,n){
  if(n === 0){return []}
  else if(n === 1){return [signature[0]]}
  else if(n === 2){return [signature[0],signature[1]]}
  let tribonacci = signature
  while(tribonacci.length < n){
  let nextSequence = tribonacci[tribonacci.length-1] + tribonacci[tribonacci.length-2] + tribonacci[tribonacci.length-3] 
  tribonacci.push(nextSequence)
  }
  return tribonacci
  }


function tribonacci(signature,n){
  switch(n){
    case 0:
      return []
    case 1:
      return [signature[n-1]]
    case 2:
      return [signature[n-2],signature[n-1]]
      }
while(signature.length < n){signature.push(signature[signature.length-1] + signature[signature.length-2] + signature[signature.length-3])}
  return signature
}

