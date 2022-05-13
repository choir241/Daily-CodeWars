// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//same order, can't be duplicates next to each other (CC)

var uniqueInOrder=function(iterable){
  let array = []
  //for(let i =0;i<iterable.length;i++)

for(let i =0;i<iterable.length;i++){
  //  //if i === i + 1, remove iterable.indexOf(i)
 iterable[i] === iterable[i + 1] ? iterable.slice(iterable.indexOf(i)) : array.push(iterable[i])
}  //else push into new array
 return array////Returns array
}
  //return new array
//Paramaters array/strings/numbers
//Examples
//uniqueInOrder('sshhhhuuuuttttteeeennnnnds') outputs ['s','h','u','t','e','n','d','s']
//uniqueInOrder('[1,2,2,3,4,5,5]') outputs [1,2,3,4,5]

//Psuedo Code

let uniqueInOrder = function(iterable){
  return [...iterable].filter((a,i) => a !== iterable[i-1])
}