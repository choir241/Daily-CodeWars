// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 

function partlist(arr) {
    let string = ''
let array = arr.map((ele,index)=>{
string = index === 0 ? string += ele : string += ' ' + ele 
 let array = arr.slice(index+1,arr.length)
 array = array.join(' ')
return [string, array]
})
array.pop()
// return array
// return [[arr[0],`${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]}`]]
// return [[`${arr[0]} ${arr[1]}`,`${arr[2]} ${arr[3]} ${arr[4]}`]]
return array
}

// partlist([ 'I', 'wish', 'I', 'hadn\'t', 'come' ])  -> 

// [ [ 'I', 'wish I hadn\'t come' ],
//   [ 'I wish', 'I hadn\'t come' ],
//   [ 'I wish I', 'hadn\'t come' ],
//   [ 'I wish I hadn\'t', 'come' ] ]

//given an array of at least 2 elements
//split into 2 non-empty parts
//each part will be a pair and a string, and must remain in the same order as the original array

//1. define what a pair is
//1.5 has to be non-empty, and remain in the same order of the original array
//2. the pairs have to be all different, pairing the different elements together
//3. put each pair into their own array
//4. return the new array

// index 0 , index 1 - index 4
// 0 - 1 , 2 -4
// 0 - 2 , 3 - 4
// 0 - 3, 4
