// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h,  bounce,  window) {
  if(!(h > 0 && bounce < 1.0 && bounce > 0.0 && window < h)) return -1
  
  // h = nth floor height
  let count = -1
  while(h>window){
  h *= bounce
  count +=2
  }
  // count += 1
  // }
  
  
  return count
  // bounce = h * 2/3
  // window 1.5 meters from ground
  
  }
   //h > 0
  //0 < bounce < 1
  //window < h
  //if any are false, return -1, else return positive integer
  //h = nth floor height
  //bounce = h * 2/3
  //window 1.5 meters from ground
  
  //parameters will always be float/number 
  
  //return how many times ball passes in front of window
  //ball can only be seen if bounce > window
  // - h = 3, bounce = 0.66, window = 1.5, result is 3
  // - h = 3, bounce = 1, window = 1.5, result is -1 
  // (Condition 2) not fulfilled).