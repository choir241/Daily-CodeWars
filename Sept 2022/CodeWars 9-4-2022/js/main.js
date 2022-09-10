// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str){
  if(str === '') return str
  if(str.includes('-')){
  return str.split('-').map((ele,i)=>{
      if(i !== 0){
        return ele[0].toUpperCase() + ele.substring(1,ele.length)
      }else{
        return ele
      }
    }).join('')
  }
  else if(str.includes('_')){
  return str.split('_').map((ele,i)=>{
  if(i!==0){
          return ele[0].toUpperCase() + ele.substring(1,ele.length)
  }else{
    return ele
  }
    }).join('')
  }
  
}

//given a string, return it as camelcase, removing all dash/underscores
//implement camelcase on all words indicated by the separation of dash/underscores
//first word is only capitalized if the original word was also capitalized
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//1.go through every element of the string
//2.if the character is equal to a dash/underscore, return the words leading up to it, with the first letter capitalized
//2.5 if the index is equal to 0, check if the first word is capitalized, only then should it also return as capitalized
//3. return the string combined as a camelcase