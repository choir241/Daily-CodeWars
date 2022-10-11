// Odd bits are getting ready for Bits Battles.

// Therefore the n bits march from right to left along an 8 bits path. Once the most-significant bit reaches the left their march is done. Each step will be saved as an array of 8 integers.

// Return an array of all the steps.

// 1 <= n <= 8

// NOTE: n != 0, because n represents the number of 1s.

// Examples
// This resembles a simple 8 LED chaser:

// n = 3

// 00000111
// 00001110
// 00011100
// 00111000
// 01110000
// 11100000
// n = 7

// 01111111
// 11111110

function bitMarch (n) {
    var arr = [];
    for(var i = 7; i >= n-1; i--){
      var result =[0,0,0,0,0,0,0,0];
      for(var j = 0 ; j<n; j++){
        result[i-j] = 1;
      }
      arr.push(result);
    }
    return arr;
  }
  
  //array of 8 integers
  //return array of subarrays of all steps
  // n = 3
  
  // 00000111
  // 00001110
  // 00011100
  // 00111000
  // 01110000
  // 11100000
  // n = 7
  
  // 01111111
  // 11111110
  
  // set a variable of a string representing the steps
  // take the number of steps n, and input 1's from right to left
  // for each step inputted, put in new subarray
  // return new array of all subarrays