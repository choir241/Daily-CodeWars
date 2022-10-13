
// Multiplication table

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]

// multiplicationTable = function(size) {
//     // insert code here
//   }


//given a parameter of size
//return an array containing subarrays representing multiplication table NxN, n being size parameter
//positive, no zero, no undefined/null, integers

// //multiplicationTable(4) => [[1,2,3,4],
//                             [2,4,6,8],
//                             [3,6,9,12],
//                             [4,8,12,16]]

//let table = []
//first loop each subarray < size value
//second loop the actual multiplication inputted into each array
//1 * 1 1 * 2 1 * 3 1* 4
//2 * 1 2 * 2 ... 
//push it into a row variable empty array
// push the row variable into the table variable
// return table

function multiplicationTable(size){
    let table = []
    for(let row = 1; row <= size; row++){
        let subarray = []
        for(let column = 1; column <= size; column++){
            subarray.unshift(row*column)
        }
        table.unshift(subarray)
    }
    return table
}


function multiplicationTable(size){
    let table = []
    for(let row = 1; row <= size; row++){
        let subarray = []
        for(let column = 1; column <= size; column++){
            subarray.unshift(row*column)
        }
        table.push(subarray)
    }
    return table
}


function multiplicationTable(size){
    let table = []
    for(let row = 1; row <= size; row++){
        let subarray = []
        for(let column = 1; column <= size; column++){
            subarray.push(row*column)
        }
        table.push(subarray)
    }
    return table
}