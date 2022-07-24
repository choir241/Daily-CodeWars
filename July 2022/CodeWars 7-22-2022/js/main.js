// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
    if(name === null || name === "" || name === undefined) {return "Hello, World!"}
    let lower = name.toLowerCase().split('')
    lower = lower[0].toUpperCase() + lower.splice(1,lower.length-1)
    return 'Hello, ' + lower.split(',').join('') + '!'
  }
  
  //take in a string, either uppercase or lowercase
  //return the name as lowercase but the first letter as uppercase and saying Hello, name
  //if no name is given or === '' return Hello world
  //let name = .toLowerCase()  name.split('') name[0].toUpperCase()
  // console.log(hello('chloe'))