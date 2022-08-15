// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  
// Accept an object with key value pairs defining the name, color and number of legs the animal has
// Return a string grabbing the color, name and number of legs values from the object
// {name:"dog",legs:4,color:"white"} -> "This white dog has 4 legs."
// 1. use template strings `${}` to combine strings and variables
// 2. use object.value to grab the values from the object 


