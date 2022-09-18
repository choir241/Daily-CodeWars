// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
 
  return x.split(' ').map((ele,i)=>{
    let word = ''
    if(ele.length % 2 == 0){
    for(let i = ele.length/2-1;i>=0;i--){
      word += ele[i]
    }
    for(let i = ele.length-1;i>=ele.length/2;i--){
      word += ele[i]
    }
    return word
      }
    else if(ele.length % 2 != 0){
  let word = ''
    for(let i = Math.floor(ele.length/2);i>=0;i--){
      if(i !== Math.floor(ele.length/2)){
      word += ele[i]
      }
    }
    word += ele[Math.floor(ele.length/2)]
    for(let i = ele.length-1;i>=Math.ceil(ele.length)/2;i--){
      word += ele[i]
    }
    return word}
  }).join(' ')
  }
  
  //given a string of words x
  //each word in the string needs to be turned inside out
  //if word is even, all letters move
  //if odd, only the middle stays the same
  //'taxi' would become 'atix' 'taxis' would become 'atxsi'
  
  //go through every word of the string
  //go through every letter of each word
  //if the word is even, at word.length/2 - 1 index, move it to 0, and keep going until you reach word.length/2 -1
  //then, from word.length/2 index, move it to word.length -1, then keep going until you reach word.length - 1
  
  