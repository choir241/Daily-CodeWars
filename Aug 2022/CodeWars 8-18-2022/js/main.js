var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count == '0'){return '0=0'}
    if(count <0){return `${count}<0`}

    let sum = 0
    let string = ''
 for(let i = 0;i<= count;i++){
   if(i !== count){
   sum += i
   string += `${i}+`
   }else{
     sum += i
     string += `${i}`
   }
 }
  string += ` = ${sum}`
  return string
  };

  return SequenceSum;

})();

//starting from 0 
//return sum from 0 to that number
//> 6
// 0+1+2+3+4+5+6 = 21
// 1. for loop
// 2. each iteration add i to total
// 3. return total