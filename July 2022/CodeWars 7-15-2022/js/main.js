// <!-- Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake. -->

let correct = string =>{
    return string.split('').map(ele=>{
      switch(ele){
        case "0":
          return "O"
        case "5":
          return 'S'
        case "1":
          return "I"
        default:
          return ele
      }
    }).join('')
    }
    
    
    //contains strings and numbers combined
    //return the string as it is supposed to look like
    
    //for() loop if(===0 5 1) return S O I
    // correct("L0ND0N"),"LONDON"
    // correct("DUBL1N"),"DUBLIN"
    // console.log(correct("51NGAP0RE"))
    //"SINGAPORE"