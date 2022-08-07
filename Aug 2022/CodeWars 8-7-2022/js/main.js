// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
  return [0, 0] || undefined ;
}


//list of integers in an array ints, and a single sum value s
//returning the first 2 values (left to right) in order of appearance, where their sum is equal to s
//sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8"
//duplicate and negative numbers are possible
//index 0 1
//index 1 2
//index 2 3
//index 3 4

//index 0 2 
//index 1 3 
//index 2 4

//index 0 3
//index 1 4


//index 0 4

// sum_pairs([4, 3, 2, 3, 4], 6)
//First attempt
//let array = []
//for(let i = 0; i<ints.length-1;i++){
// for(let index = 1;index<ints.length;index++){
// if(ints[i]+ints[index] === sum && index !== i){
//  array.push(ints[i])
// array.push(ints[index])
//}  
//}
//return [array[0], array[1]]
//}
//Didn't realize the priorities for pairs over pairs with one element between it


//Second attempt
  //let length = int.length
  //let array = []
  //for(let i =0; i< int.length-1; i++){
  //  for(let index = 1;index < length;index++){
  //  if(int[i]+int[index]===sum){
  //  array.push(int[i])
  // array.push(int[index])
  //  length--
  //}
  //}
  //return array
  //}


//Third attempt
  //let increase = 1
  //let array = []
  //for(let i =0;i<ints.length-1;i++){
   // for(let index=1;index<ints.length;index+= increase){
    // if(ints[index]+ints[i] === s){
     // array.push(ints[index])
     //array.push(ints[i])
    //}
   //}
   //increase++
  //}
  //return array.length < 1 ? undefined: [array[0],array[1]]


  function sumPairs(ints, s) {
    let array = []
  let o = 1
  for(let index = 0;index<ints.length;index++){
  for(let i =0;i<ints.length;i++){
    let open = i+o
    if(open <= ints.length && open!==i){
      if(ints[i] + ints[open] === s){
        array.push(ints[i])
        array.push(ints[open])
      }
    }
  }
  o++
  }
  return array.length < 1 ? undefined : [array[0],array[1]]
  }


function sumPairs(ints, s) {
    let array = []
  let o = 1
  for(let index = 0;index<ints.length;index++){
  for(let i =0;i<ints.length;i++){
    let open = i+o
    if(open <= ints.length && open!==i){
      if(ints[i] + ints[open] === s){
        array.push(ints[i])
        array.push(ints[open])
        break
      }
    }
  }
  o++
  }
  return array.length < 1 ? undefined : array
  }