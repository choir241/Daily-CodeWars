// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true


let setAlarm = (employed, vacation) => employed === true && vacation === false ? true : false 

//boolean values, first true if employed, second true if on vacation
//returning boolean, true if employed and not vacation, false otherwise
//setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
// employed === true && vacation === false || employed === false && vacation === true