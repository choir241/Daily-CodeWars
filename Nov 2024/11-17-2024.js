// Description:
// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Explanation:

// category A: 20 books (ABART)
// category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
// category C: 50 books (CDXEF)
// category W: 0 books

function stockList(books, categories) {
    if(!books.length || !categories.length){
      return "";
    }
    //   books = ["BBAR 150","CDXE 515","BKWR 250","BTSQ 890","DRTY 600"]
    // categories = ["A","B","C","D"]
  
    //go through books
  
    let obj = {};
    
    let finalString = "";
    
    for(let i = 0; i<categories.length; i++){
      obj[categories[i]] = 0;
    }
  
    for(let i = 0; i<books.length; i++){
      if(categories.includes(books[i][0])){
        obj[books[i][0]] += Number(books[i].split(" ")[1]);
      }
    }  
    //check if the category exists in categories list
  
    //if it does, add to quantity for object. ie. books[A]: 30
  
    //go through objects and add the dynamic values and keys into string form
  
    for (const category in obj) {
      finalString += `(${category} : ${obj[category]}) - `
    }    
  
    let numOfBooks = finalString.split("-")
    numOfBooks.pop()
  
    return numOfBooks.join("-").trim();
}

// books classified from a - z categories
// book code min of 3 characters

// 1st character of book code is book category
// evey book has their code followed by space and positive integer
// integer represents the quantity of the book

// recieve list of books and the list of categories
// find total number of books with category codes with the category list given
// codes are in the same order in the both lists

// return the result as a string, or as a list of pairs
// if any lists input are empty, return empty string or empty array

//ie. books: "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"
// list of categories: "A", "B", "C", "W"
// should return (A : 20) - (B : 114) - (C : 50) - (W : 0)