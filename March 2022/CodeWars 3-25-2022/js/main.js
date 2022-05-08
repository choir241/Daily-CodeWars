// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.split('').map((x,i)=>i>0?x:'').map((x,i)=>i<str.length-1?x:"").join('')
    
    };
    

function removeChar(str){
    return str.substring(1,str.length-1)
        
        };

function removeChar(str){
    return str.slice(1,-1)
   
   };

function removeChar(str){
  let stri = ''
for(let i = 1;i<str.length-1;i++){
  stri+=str[i]
}
return stri
};