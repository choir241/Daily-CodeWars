// The numbers 12, 63 and 119 have something in common related with their divisors and their prime factors, let's see it.

// Numbers PrimeFactorsSum(pfs)        DivisorsSum(ds)              Is ds divisible by pfs
// 12         2 + 2 + 3 = 7         1 + 2 + 3 + 4 + 6 + 12 = 28            28 / 7 = 4,  Yes
// 63         3 + 3 + 7 = 13        1 + 3 + 7 + 9 + 21 + 63 = 104         104 / 13 = 8, Yes
// 119        7 + 17 = 24           1 + 7 + 17 + 119 = 144                144 / 24 = 6, Yes
// There is an obvius property you can see: the sum of the divisors of a number is divisible by the sum of its prime factors.

// We need the function ds_multof_pfs() that receives two arguments: nMin and nMax, as a lower and upper limit (inclusives), respectively, and outputs a sorted list with the numbers that fulfill the property described above.

// We represent the features of the described function:

// ds_multof_pfs(nMin, nMax) -----> [n1, n2, ....., nl] # nMin ≤ n1 < n2 < ..< nl ≤ nMax
// Let's see some cases:

// ds_multof_pfs(10, 100) == [12, 15, 35, 42, 60, 63, 66, 68, 84, 90, 95]

// ds_multof_pfs(20, 120) == [35, 42, 60, 63, 66, 68, 84, 90, 95, 110, 114, 119]
// Enjoy it!!


function dsMultofPfs(n1, n2) {
    let array = []
    for(let i = n1; i<=n2 ; i++){
    if(returnDivisorSum(i) % returnPrimeSum(primeFactors(i)) === 0){
    array.push(i)
    }
    }
    return array
    }
    
    
    function returnDivisorSum(n){
    let array = []
    let sum = 0
    for(let i =1;i<=n;i++){
     if(n % i === 0 && array.indexOf(i)===-1){
     array.push(i)
    sum+=i
    }
    }
    return sum
    }
    
    function returnPrimeSum(array){
    return array.reduce((a,b)=>a+b,0)
    }
    
    
    function primeFactors(n){
        let divisor = 2
        let array = []
        while(n >= 2){
            if(n % divisor === 0){
                array.push(divisor)
                n = n/ divisor
            }else{
                divisor++
            }
        }
        return array
    }
    
    
    //with the prime factors and all divisors of the number, sum of divisors is divisible by sum prime facotrs
    //with numbers nmin to nmax, return the numbers that fulfill the property between n1 and n2
    //ds_multof_pfs(10, 100) == [12, 15, 35, 42, 60, 63, 66, 68, 84, 90, 95]
    //let array = []
    //for(let i =n1;i<n2;i++){
    //if(returnDivisorSum(i) % returnPrimeSum(i) === 0){
    //array.push(returnDivisorSum(i))
    //array.push(returnPrimeSum(i))
    //}
    //}
    //return array
    //
    //function returnDivisorSum(n){
    //let array = []
    //let sum = 0
    //for(let i =1;i<=n;i++){
    //  if(n % i === 0 && array.indexOf(i)===-1){
    //  array.push(i)
    // sum+=i
    //}
    //}
    //return sum
    //}
    
    //function returnPrimeSum(n){
    //let array = []
    //let sum = 0
    //for(let i =1;i<=n;i++){
    //  if(returnPrime(n) === true && array.indexOf(i)===-1){
    //  array.push(i)
    // sum+=i
    //}
    //}
    //return sum
    
    //function returnPrime(n){
    // for(let i = 2;i<n-1;i++){
    // if(n % i == 0){
    // return false
    //}
    //}
    //return true
    //}