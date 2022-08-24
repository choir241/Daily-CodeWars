// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// Kata Series
// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

function wave(str){
  let array = []
  let upperCaseIndex = 0
  for(let i = 0; i < str.length; i++){
    if(upperCaseIndex === 0 && str[upperCaseIndex] !== ' '){
    let word = str[upperCaseIndex].toUpperCase() + str.slice(1,str.length)
    array.push(word)
    upperCaseIndex++
    }else if(str[upperCaseIndex] !== ' '){
    let word = str.slice(0,upperCaseIndex) + str[upperCaseIndex].toUpperCase() + str.slice(upperCaseIndex+1,str.length+1)
    array.push(word)
    upperCaseIndex++
    }else{
    upperCaseIndex++
    }
}
  return array
}


//take in a string
//return an array with the string representing a mexican wave
//if empty/whitespace, skip it
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//1.go through each character of the string
//2.have a variable that will represent the upperCase index
//3.increase this variable by 1 each time we iterate through
//3.5 if the character is whitespace, skip it
//4.uppercase the character
//5.add the rest of the characters
//6.push the new string into the array
//7.return the array