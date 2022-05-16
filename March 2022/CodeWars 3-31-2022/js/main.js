// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
  let splited = str.split('')
  splited.forEach(ele=>{if(ele==='i'||ele==='a'||ele==='e'||ele==='o'||ele==='u'){
    vowelsCount+=1
  }}
    )
    
    return vowelsCount;
  }


  function getCount(str) {
    return str.split('').filter(ele => 'AEIOUaeiou'.includes(ele)).length
    }