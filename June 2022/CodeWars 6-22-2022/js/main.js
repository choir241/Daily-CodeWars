// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
    let count = 0
    this.split('').forEach(ele=>{
      if(ele===ele.toLowerCase() && ele !== ' ' && ele !== '.' && ele !== '#'){
        count += 1
      }
    })
    return count === 0 ? true : false
    }
    //string
    //returning boolean, check if string is all uppercase or not
    //if string has no letters, return true
    //"c" -> False
    // "C" -> True
    // "hello I AM DONALD" -> False
    // "HELLO I AM DONALD" -> True
    // "ACSKLDFJSgSKLDFJSKLDFJ" -> False
    // "ACSKLDFJSGSKLDFJSKLDFJ" -> True
    //let count = 0
    // for(let i;i<this.length;i++)
    //if(this[i] === this[i].toLowerCase())
    //count ++
    //return count === 0


    String.prototype.isUpperCase = function() {
        return this == this.toUpperCase()
        }