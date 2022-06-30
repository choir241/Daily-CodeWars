// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

let paperwork = (n, m) => n<0 || m < 0 ? 0 : m * n 

//we're taking in 2 integers, n classmates m pages
//we're determining how many pages are needed
//if n < 0 m < 0 return 0
//n= 5, m=5: 25
//n=-5, m=5:  0
//n<0 || m < 0 ? 0 : m * n 