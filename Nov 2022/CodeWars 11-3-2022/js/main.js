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
 