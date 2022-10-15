// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// 'man i need a taxi up to ubud'), 'taxi'
// 'what time are we climbing up the volcano'), 'volcano'
// 'take me to semynak'), 'semynak')


function high(x){

}

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let wordScores = []
    let stringSplitUp = x.split(' ')
    
    for(let i = 0;i<stringSplitUp.length; i++){
      let currentSum = 0
      for(let index = 0;index < stringSplitUp[i].length;index++){
    currentSum += alphabet.indexOf(stringSplitUp[i][index])+1
      }
      wordScores.push(currentSum)
    }
      return stringSplitUp[wordScores.indexOf(Math.max(...wordScores))]
    }
    
    //string of words, return the highest scoring word
    //in the position of alphabet, the score is based (ie. a=1, b=2...)
    //if there are equal scores, return the earliest one
    //all inputs will be lowercase and valid
    
    //set up an alphabet variable and have the indices be their scores (index+1)
    //go through each word, and also have a sum variable to add the scores
    //if the total sum is more than the current sum, have the index of the word be the current index to return
    //if we can't find any words with larger scores, return the word based on the index we have