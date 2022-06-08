// Write a function that checks if a given string (case insensitive) is a palindrome.

let isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase()

//Take in string
//return boolean
// isPalindrome("a"), true
// isPalindrome("hello"), false)
// isPalindrome("Madam"), true)
//split reverse === x toLowerCase