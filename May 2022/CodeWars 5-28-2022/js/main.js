// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const duplicates = {}
    numbers.forEach(ele=>duplicates[ele] = 0)
    numbers.forEach(ele=>duplicates[ele]+=1)
    for(let ele in duplicates){
      if(duplicates[ele]===1) return ele
    }
    }
    
    //array of integers, length is odd, all are the same except for one
    //return one integer, that integer is the outlier
    //will always be valid
    //[1, 1, 2] ==> 2
    // [17, 17, 3, 17, 17, 17, 17] ==> 3

    function stray(numbers) {
        for(let keys in numbers){
        if(numbers.indexOf(numbers[keys])===numbers.lastIndexOf(numbers[keys])) return numbers[keys]
        }
        }//indexOf returns first index that matches the given value inside the (), and since it loops, both give the first indexes of 1 and 2
        
        //array of integers, length is odd, all are the same except for one
        //return one integer, that integer is the outlier
        //will always be valid
        //[1, 1, 2] ==> 2
        // [17, 17, 3, 17, 17, 17, 17] ==> 3