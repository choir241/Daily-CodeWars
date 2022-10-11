// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

function minSum(arr) {
    let sorted = arr.sort((a,b)=>a-b)
    let products = sorted.map((ele,i)=>{
      if(i < sorted.length/2){
      let last = sorted[sorted.length-1-i]
      return last * ele
      }
    })
    let sum = 0
    for(let i = 0;i < products.length/2; i++){
      sum += products[i]
    }
    return sum
    }
    // Given an array of integers , 
    // Find the minimum sum which is obtained
    // from summing each Two integers product
    // minSum({5,4,2,3}) ==> return (22) 
    // 5*2 + 3*4 = 22.
    // Array/list will contain positives only .
    // Array/list will always have even size
    
    //1. sort biggest to smallest
    //2. multiply last index with first index
    //3. keep doing this until you reach the end
    //4. sum them all together