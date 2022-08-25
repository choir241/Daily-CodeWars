// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


function remove(s,n){
  let exclamations = 0;
   let array = []
   for(let i = 0; i< s.length;i++){
     if(s[i] == '!' && exclamations !== n){
       exclamations += 1;
       array.push(i)
       }
     if(exclamations === n){
       break;
     }
 }
   let string = ''
   for(let i = 0;i<s.length;i++){
     if(!(array.includes(i))){
       string += s[i]
     }
   }
   return string
   
 }
 
 // given a string
 // return the string, remove certain amount of ! from left to right
 // n is always positive
 // remove("Hi!",1) === "Hi"
 // remove("Hi!",100) === "Hi"
 // remove("Hi!!!",1) === "Hi!!"
 // remove("!Hi!",1) === "Hi!"
 //1. set a variable representing the number of exclamation points removed
 //2. from left to right, remove one exclamation point
 //3. every time we move up one in the string, we add one to the variable
 //4. once the variable is equal to n, we want to stop the loop
 //5. return the new string