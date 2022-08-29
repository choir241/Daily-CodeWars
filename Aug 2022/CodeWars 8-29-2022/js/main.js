// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
  let array = []
for(let i = 0;i<word.length;i++){
  if(word[i].toLowerCase()==='a'||word[i].toLowerCase()==='e'||word[i].toLowerCase()==='i'||word[i].toLowerCase()==='o'||word[i].toLowerCase()==='u'||word[i].toLowerCase()==='y'){
    array.push(i+1)
  }
}
  return array
}

//given a string
//return an array consisting of indexes of all vowels, if any
//a e i o u y (including uppercase)
//1. separate string so we can iterate through it
//2. go through every element in the string
//3. if any of elements are equal to a vowel, add it to the array
//4. return the new array