// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let timeTaken = walk.length
    let directions = {
      'n':0,
      's':0,
      'e':0,
      'w':0,
    }
    walk.forEach(ele=>directions[ele]+=1)
      return timeTaken === 10 && directions['n']-directions['s'] == 0 && timeTaken === 10 && directions['e']-directions['w'] == 0
    }
    
    //given an array of strings, never empty array, invalid, null or undefined values
    //each letter/direction represents one block, which takes one minute to walk
    //return boolean true/false value if the directions given will take exactly 10 minutes
    //you must return back to your starting point
    
    //['n','s','n','s','n','s','n','s','n','s'] return true
    //['w','e','w','e','w','e','w','e','w','e','w','e'] return false
    //['w'] return false
    
    //set variable as timeTaken = array.length to represent how much time has passed during the walk
    //set up a loop, going through every element and check to see if there are opposite directions next to each other
    //if there isn't (aka leftover directions), add to a new array
    //if the array is empty (aka we didn't technically move from our starting point) return true
    //else return false
    