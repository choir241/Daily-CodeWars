// 345. Reverse Vowels of a String
// Easy

// 2827

// 2260

// Add to List

// Share
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function(s) {
    
};

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  let array = []
  let vowels = ['a','e','i','o','u']
  for(let i = s.length-1; i > -1; i--){
      if(vowels.include(s[i])){
          array.unshift(s[i])
      }else{
          array.push(s[i])
      }
  }
  return array
};


// string of s
// reverse only vowels and return the string
// vowels are considered a, e, o, i, u
// lowercase, uppercase, duplicates
// 1 <= s.length <= 3 * 105

/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
   let left = 0
   let right = s.length - 1
   let characters = s.split('')
   while ( left < right){
       if(!vowel.includes(characters[left])){
           left++
           continue;
       }
         if(!vowel.includes(characters[right])){
           right--
           continue;
       }
     let tmp = characters[left]
     characters[left] = characters[right]
     characters[right] = tmp
     left++;
     right--;
   
   }
   return characters.join('')
 };
 
 //h e l l o 0 1 2 3 4 5
 //h o l l o 0 5 2 3 4 5
 //h o l l o 0 5 2 3 4 5
 //h o l l o 0 5 2 3 4 5
 //h o l l e 0 5 2 3 4 1
 
 // string of s
 // reverse only vowels and return the string
 // vowels are considered a, e, o, i, u
 // lowercase, uppercase, duplicates
 // 1 <= s.length <= 3 * 105
 



 var lastDigit = function(str1, str2){  

  // if exponent is 0, return 1
  
  if (parseInt(str2) === 0) return 1;
  
  // otherwise...
  // 0 always returns 0
  // 1 always returns 1
  // 2 rotates between 2, 4, 8, 6....
  // 3 rotates between 3, 9, 7, 1....
  // 4 rotates between 4, 6....
  // 5 always returns 5
  // 6 always returns 6
  // 7 rotates between 7, 9, 3, 1....
  // 8 rotates between 8, 4, 2, 6....
  // 9 rotates between 9, 1....
  
  // because we only need the final digit of str1 to determine the result, let's capture it
  var seed = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  var exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.


  // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
  //
  
    return Math.pow(seed, exp) % 10;
}