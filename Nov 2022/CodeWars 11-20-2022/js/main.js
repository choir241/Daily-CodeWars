// The Twenty-One Card Trick, also known as the 11th card trick or three column trick, is a simple self-working card trick that uses basic mathematics to reveal the user's selected card.
// The game uses a selection of 21 cards out of a standard deck. These are shuffled and the player selects one at random. The cards are then dealt out face up in three columns of 7 cards each. The player points to the column containing their card. The cards are picked up and the process is repeated three times, at which point the magician reveals the selected card.

// Source: Wikipedia

// Your task is to implement an algorithm that is able to execute the Twenty-One Card Trick. To simplify things, the cards will be changed to the set of integers between 1 and 21(inclusive). The function will be passed as argument a member of the audience that has selected a certain card and has a method get_input that receives a list of 3 lists as arguments and returns the index of the column containing the selected card. Example:

// const audience = new Audience(13);

// > audience.getInput([[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21]]);
// 1 // Since 13 is at the 2nd column
// After 3 times it is asked, however, the audience member no longer will give an answer. Use these three functions invokations to discover which card the audience member has.

function guessTheCard(audience) {
  /*
  audience has the method getInput(), that receives an array of
  3 arrays of 7 cards as parameter and returns the index of the
  array where the selected card is present.
  This method can be called up to 3 times,
  after that it will throw an Error.
  */
    return 2;
  }

//   function guessTheCard(audience) {

//     let deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
//   let columns = [[],[],[]]
//   let count = 0
//   while(columns[0].length + columns[1].length + columns[2].length < deck.length){
//     let card = Math.ceil(Math.random()*deck.length)
//     if(deck.includes(card)){
//       columns[count].push(card)
//     deck[deck.indexOf(card)] = 0
//     }
    
//     if(columns[count].length >= 21/3){
//       count++
//     }
  
//   }

// deck = columns[audience.getInput(columns)]
// let secondCol = [[],[],[]]
// count = 0
// while(secondCol[0].length + secondCol[1].length + secondCol[2].length < deck.length){
//    let card = Math.ceil(Math.random()*deck.length)
//     if(deck.includes(card)){
//     secondCol[count].push(card)
//     deck[deck.indexOf(card)] = 0
//     }
    
//     if(secondCol[count].length >= deck.length/3){
//       count++
//     }
// }
  


function guessTheCard(audience) {

  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let cards = [[],[],[]]
let count = 0
let deal = () => array.forEach((ele,i)=>cards[i%3].push(ele))
let stack = () =>{
  let row = audience.getInput(cards)
  row == 0 ? array = cards[1].concat(cards[0]).concat(cards[2])
          : row == 1 ? array = cards[0].concat(cards[1]).concat(cards[2])
              : array = cards[0].concat(cards[2]).concat(cards[1])
              cards = [[],[],[]]
  }
while(count < 3){
  deal()
  stack()
  count++
}
return array[10]
/*
audience has the method getInput(), that receives an array of
3 arrays of 7 cards as parameter and returns the index of the
array where the selected card is present.
This method can be called up to 3 times,
after that it will throw an Error.
*/

}

//cards will be represented by integers 1 ad 21
//audience variable will take in argument of certain card picked
//audience class has method get_input that takes in array of 3 nested arrays
//variable guess will be the function guessthecard, which takes in audience
//returns the index of the column containing selected card

//we want to return the card that the audience has

//after 3 times it's asked,audience won't give answer