// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
};

var isAnagram = function(test, original) {
  test = test.toLowerCase()
  original = original.toLowerCase()
 test = test.split('').sort((a,b)=>a<b)
original = original.split('').sort((a,b)=>a<b)
return test.every(ele=>original.includes(ele)) === original.every(ele=>test.includes(ele))
};


// write the function isAnagram
var isAnagram = function(test, original) {
  if(test.length !== original.length){return false}
  
  test = test.toLowerCase()
  original = original.toLowerCase()
  
  let originalCount = {}
  
  original.split('').forEach(ele=>originalCount[ele] = 0)
  original.split('').forEach(ele=>originalCount[ele]++)
  
  for(let i = 0; i < test.length; i++){
    if(originalCount[test[i]]){
      originalCount[test[i]]--
    }
  }
    
  for(let keys in originalCount){
    if(originalCount[keys]>0){
      return false
    }
  }
  return true
  

};
