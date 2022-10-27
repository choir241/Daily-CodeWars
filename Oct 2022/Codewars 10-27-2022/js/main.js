// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.


//2 strings
//lamps are rows, represented by the character x/o.  x is off, o is on
//drone is position of drone, and flight path til this point.  Goes left to right

// flyBy(xxxxxx', '====T'), 'ooooox');
// flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
// flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 

//T is inclusive

//'o'.repeat(length of T) += 'x'.repeat(length of lamps - length of T)

function flyBy(lamps, drone){
  if(drone.length < lamps.length){
return 'o'.repeat(drone.length) + 'x'.repeat(lamps.length - drone.length)
    }else if(drone.length >= lamps.length){
return 'o'.repeat(lamps.length)
    }
}