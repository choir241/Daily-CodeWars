// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(num){
    const phrase = {
    1 : "I love you",
    2 : "a little",
    3 : "a lot",
    4 : "passionately",
    5 : "madly",
    6 : "not at all",
    }
   while(num > 6){
  num-=6
   }
    return phrase[num]
  }
  // console.log(howMuchILoveYou(492))
  // console.log(howMuchILoveYou(6))
  // console.log(howMuchILoveYou(3))
  //take in integer
  //return phrase according to how many petals are torn
  // console.log(howMuchILoveYou(1))
  //loop
  //object respective to the phrase of each count