// Reverse every other word in the string

// Reverse every other word in a given string, then return the string. 
// Throw away any leading or trailing whitespace, while ensuring there is exactly 
// one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

    function reverse(str){
        return str.split(' ').map((ele,i)=>{
            if(i % 2 !== 0){
                return ele.reverse().trim()
            }else{
                return ele.trim()
            }
        }).join(' ').trim()
    } //first try

    function reverse(str){
        let count = 0
        let finishedString = ''
        let string = ""
        str = str.trim()
        for(let i = 0; i < str.length; i ++){
            string+= str[i]
            if(str[i] === ' ' && count % 2 == 0){
                finishedString += string.trim() + ' '
                count++
            }else if(str[i]=== ' ' && count % 2 !== 0){
                let reversedString = string.split('').reverse()
                reversedString = reversedString.join('')
                finishedString += reversedString.trim() + ' '
                count++
            }
        
        }
        return finishedString
    }



    function reverse(str){
        let count = 0
        let finishedString = ''
        let string = ""
        str = str.trim()
        for(let i = 0; i < str.length; i++){
            string+= str[i]
            if(str[i] === ' ' && count % 2 == 0){
                finishedString += string.trim() + ' '
                string = ""
                count++
            }else if(str[i]=== ' ' && count % 2 !== 0){
                let reversedString = string.split('').reverse()
                reversedString = reversedString.join('')
                finishedString += reversedString.trim() + ' '
                string = ""
                count++
            }
        
        }
        return finishedString
    }




//FINAL SOLUTION
    function reverse(str){
        let count = 0
        let finishedString = ''
        let string = ""
        str = str.trim()
        let splited = str.split(' ')
        for(let i = 0; i < str.length; i++){
            string+= str[i]
          if((count === splited.length -1 && count % 2 == 0 && i == str.length-1) || (str[i] === " " && count % 2 == 0)){
                finishedString += string.trim() + " "
                string = ""
                count++
          }else if((count === splited.length -1 && count % 2 !== 0 && i == str.length -1) || (str[i]=== " " && count % 2 !== 0)){
                let split = string.split('')
               split = split.reverse()
              split = split.join('')
              finishedString += split.trim() + " "
                string = ""
                count++
            }
        
        }
        return finishedString.trim()
    }


    //1. go through every element of the string
    //2. set variable called count
    //2. check if the element is a whitespace, indicating it's the end of the word
    //3. if the count is equal to an even number, ignore it and add it to the finished string variable and add one to count
    //4. if count is equal to an odd number, convert it into an array using split() and use reverse() and return it as a string using join() and add one to count and add to the finished string variable
    //5. return the finished string variable

//   reverse("Reverse this string, please!"), "Reverse siht string, !esaelp"
//   reverse("I really don't like reversing strings!"),"I yllaer don't ekil reversing !sgnirts"

  // reverse every other string, and return the string
  // make sure there is exactly one whitespace between each word
  // remove any leading or trailing white space
  // any punctuation is treated as part of the word

  //no invalid inputs, no uppercase, yes captitalized for the first word, sentence of a string

  //reverse('Today is a lovely day, is it not?') -> 'Today si a ylevol day, si it ?ton'
  //reverse('The weather is great  and I enjoy  taking walks. ')  -> 'The rehtaew is taerg and I enjoy gnikat walks.'


  //str.split(' ')
  //1 3 5 7 etc
  //if(index % 2 !== 0)
  //.trim()
  //reverse()
  //for loop/ map / forEach
  //.join(' ')