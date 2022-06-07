// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

let greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

//we're taking two strings
//we're returning a sentence string depending on if name is equal to owner or not
//greet('Shuten','Shuten') 'Hello boss'
//greet('Mumei','Ina') 'Hello guest'
//name === owner ? 'statement 1' : 'statement 2'