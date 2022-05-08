// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let arr = str.split('').map(ele=>ele.toLowerCase())
    let splited = arr.reduce((prev,curr)=>{
    
        if(prev.indexOf(curr)===-1){
          prev.push(curr)
        }
        return prev
      },[])
    
    return splited.length === str.length
    }


    function isIsogram(str){
        let i, j;
        str = str.toLowerCase();
        for(i=0;i<str.length;++i){
          for(j=i+1;j<str.length;++j){
            if(str[i]===str[j]){return false;}
          }
        }
      return true;
      
    }