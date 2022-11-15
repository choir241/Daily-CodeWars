// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

//       1
//     1   1
//   1   2   1
// 1   3   3   1

// input is number > 0
// return nested array representing levels of pascal triangle
// empty array for final triangle; let pyramid = []
// loop for levels of triangle for(let i = 1; i <= num; i++)
// reset value of row for new level of triangle; let row = []
// loop for each row for(let j = 0; j < i; j++)
// push into row row.push()
// check if last/first value j == 0 || j == i-1 (j will never equal i unless last iteration of j)
// if first/last value, push 1
// else, grab the previous subarray [i-2] since i loop does not start with 0, we must subtract an additional 1 here to grab the previous array, and grab the index before our current index [j-1] and the current index [j] and add them together
// push our completed row into the pyramid pyramid.push(row)
// return pyramid


function getPascal(num){
  let pyramid = []
  for(let i = 1; i <= num; ++i){
    let row = []
    for(let j = 0; j < i;++j){
      // row.push(j)
      row.push(j==0||j==i-1? 1 : pyramid[i-2][j-1] + pyramid[i-2][j])
    }
    pyramid.push(row)
  }
  return pyramid
}

console.log(getPascal(5))