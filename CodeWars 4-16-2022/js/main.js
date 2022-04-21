// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let long = s1+s2
    let list = long.split('')
    
    let reduce = list.reduce((prev,curr)=>{
    if(prev.indexOf(curr)===-1){
    prev.push(curr)
    }
    return prev
    },[])
    
    let red = reduce.sort()
    return red.join('')
    }


function longest(s1, s2){
    s3 = s1 + s2
    s4 = s3.split('')
    s4 = s4.sort().filter(function(element,index,array){
        return element !== array[index - 1]
    })
    return s4.join('')
}

function longest(s1, s2){
    let output = []
    let combi = s1.concat(s2)
    let array = combi.split('').sort()

    for(let i = 0; i<=array.length; i++){
        console.log(array[i])
        if(!output.includes(array[i]) ){
            output.push(array[i])
        }
    }
    return output.join('')
}


