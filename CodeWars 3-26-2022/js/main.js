// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
    let array = x.reduce(function(a,b){
    return Number(a) + Number(b)
    },0)
    
    return array
    }