    // Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

    // * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    // * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
    // * url = "https://www.cnet.com"                -> domain name = cnet"


    // function domainName(url){
    //     //your code here
    //   }

    //given a string of a url
    //return only the domain name
    //* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
    // separate string into parts, easiest would be '/' since it's a shared element with all websites and not all websites precede with www.
    //have 2 conditionals, one that checks if it precedes with www., the other precedes without it
    //return the element within the now separated elements depending on the condition
    //make sure to remove the .net/.com/etc
    //let splitUrl = url.split('/')
    //if(splitUrl[2]==='www'){return splitUrl[3]}
    //else{
    //    return splitUrl[2].split('.')[0]
    //}


    function domainName(url){
        if(url === '' || url === null) return ''
          if(url[0]==='w'){
            return url.split('.')[1]
          }
          else if(url[8]==='w' && url[9]==='w'){
            return url.split('.')[1]
          }
          else if(url[8]!=='w' && url[0]!=='w' && url[0] === 'h'){
         return url.split('/')[2].split('.')[0]
          }else{
          return url.split('.')[0]
          }
      }