// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    let count = {}
    for(let i =0;i<arr.length;i++){
      count[arr[i]] = 0
    }
      for(let i =0;i<arr.length;i++){
      count[arr[i]] ++
    }
  
  
  for(let i = 0; i<arr.length;i++){
  while(count[arr[i]]>n){
       arr.splice(arr.lastIndexOf(arr[i]),1)
      count[arr[i]]--
  }
  }
    return arr
  }
  
//given array of whole number integers
//return array without changing the order 
//if number repeats more than n times, remove extra 
//duplicates until it equals n
//[1,2,3,1,2,1,2,3],2 -> [1,2,3,1,2,3]

// console.log(deleteNth([40, 44, 4, 44, 44, 40, 4, 44, 4, 40, 4, 44, 44, 4, 2, 44, 40, 44, 44, 4, 40, 40, 4, 44, 4, 4], 4))
// [40, 44, 4, 44, 44, 40, 4, 44, 4, 40, 4, 2, 40] answer
// [ 40, 44, 4, 44, 44, 40, 4, 44, 4, 40, 4, 2, 40 ]


//{ele : count}
//the moment that the count of ele is === 2, we start delete that
//specific ele

// [40, 44, 4, 44, 44, 40, 4, 44, 4, 40, 4, 2, 40]


function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }


  const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
  }