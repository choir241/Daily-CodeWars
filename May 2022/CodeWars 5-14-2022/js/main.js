// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
  let pyramid = []
for(let i =0;i<nFloors;i++){
  pyramid.push(' '.repeat(nFloors-i-1) + '*'.repeat(i*2+1) + ' '.repeat(nFloors-i-1))
}
return pyramid
}
//positive number one integer
//return pyramid, rows of * in an array
//towerBuilder(2) -> ['*','***']
//towerBuilder(4) -> ['*','***','*****','*******']
//for loop
//the top will have spaces in between to fill out the max row length
//let row = ''
//when row reaches end, new row