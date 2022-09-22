// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

let array_diff = (a, b) => {
  let array = []
  for(let i = 0;i<a.length;i++){
    if(!b.includes(a[i])){
      array.push(a[i])
    }
  }
  return array
}

//take in 2 arrays
//remove any elements in a array that exist in b array
//return the new array
//arrayDiff([1,2],[1]) == [2]

//1.go through every element in a array
//2.check if b array has the same element
//3. if not, add to new array
//4. return new array