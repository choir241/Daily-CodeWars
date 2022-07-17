// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).




function twiceAsOld(dadYearsOld, sonYearsOld) {
	let i = 0
	if(dadYearsOld>sonYearsOld*2){
while(dadYearsOld > sonYearsOld*2){
	dadYearsOld--
	i++
}
return i
	}else{
		while(dadYearsOld < sonYearsOld*2){
			dadYearsOld++
			i++	
		}
		return i
	}
}

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//console.log(twiceAsOld(55,30))
//(36,7) , 22
//