// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

let twoSort = s => s.sort()[0].split('').join('***')
//sort alphabetically
//case sensitive


//array of strings
//return array sorted alphabetically (case sensitive) and ASCII values of chars
//return first value as string and have *** between each of letters
//cannot remove/add elements from/to array
// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )

//converts to ASCII values

//var string = "Some string";

// for (var i = 0; i < string.length; i++) {
//   console.log(string.charCodeAt(i));
// }

// console.log(twoSort(["Bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))