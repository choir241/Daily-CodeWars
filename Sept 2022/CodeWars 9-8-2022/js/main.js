// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([ 
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

  function arrAdder(arr) {
    let array = []
      let o = 0
  for(let i = 0;i<arr.length;i++){
    let word = ''
    for(let index = 0;index<arr.length;index++){
      if(arr[index][o]){
          word += arr[index][o]
      }
  }
    array.push(word)
    o++
  }
    return array.join(' ').trim()
  }
  
  //0 1 2 3 4 5 ... arr.length
  //arr[i][0] + arr[1][0]....arr[length][0]
  //arr[i][1] + arr[2][1].....
  
  //receive an array of arrays
  //return a string with all the characters combined to make a sentence
  //all 0 indexed characters should be combined, than separated by a space, than index 1, etc
  // return string
  //shorter words will have more empty spaces, ignore them
  
  
  //go through each array, and combine each element into one word
  //then add that to an array
  //then return the array as a string

  function arrAdder(arr) {
    var sentence = "";
    for(var i = 0; i < arr[0].length; i++){
      for(var j = 0; j < arr.length; j++){
        sentence+=arr[j][i];
      }
      sentence+=" ";
    }
    return sentence.trim();
  }