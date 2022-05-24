// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
        //let verticle =0
    //let horizontal =0
    let vertical = 0
    let horizontal = 0
    //for Loop
    walk.forEach(ele=>{
    //e + 1 w - 1
    //n + 1 s - 1
      switch(ele){
        case 'w':
          horizontal += 1
          break;
        case 'e':
          horizontal -=1
          break;
        case 'n':
          vertical +=1
          break;
        case 's':
          vertical -=1
          break;
      }
    })
        //if length of walk is exactly 10 -> each step is one grid, and one step = 1 min
    //return true if it takes exactly 10 min and returns back to start, otherwise false
        //if at end vertical and horizontal are both 0, return true, else false
    return vertical === 0 && horizontal === 0 && walk.length === 10 ? true : false
      //insert brilliant code here
    }
    
    //given an array of strings, never null
    //isValidWallk(['e']) false
    //isValidWalk(['e','w','e','w','e','w','e','w','e','w']) true

    //isValidWallk(['e']) false

    function isValidWalk(walk){
        let res = {n:0, w:0, s:0, e:0}
        walk.forEach((c)=>res[c]++)
        return walk.length === 10 && res.n == res.s && res.e == res.w
    }

    function isValidWalk(walk){
        return walk.length == 10 && !walk.reduce(function(w,step){return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
    }