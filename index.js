function longBurp(num) {
	let rBrup = "r";
	for(let i=0; i<num-1; i++){
		rBrup += rBrup[i];
	}
	return "Bu" + rBrup + "p";
}

function longBurp(num) {
	return "Bu" + "r".repeat(num) + "p";
}

function longBurp(num) {
	var r = "r";
	return `Bu${r.repeat(num)}p`;
}

function pHName(pH) {
	if (pH>14||pH<0) return 'invalid';
	if (pH<7) return 'acidic';
	if (pH>7) return 'alkaline';
	return 'neutral';
}

const pHName = pH => pH < 0 || pH > 14 ? 'invalid' :
	pH < 7 ? 'acidic' : pH > 7 ? 'alkaline' : 'neutral';

  function pHName(pH) {
	return pH < 0 || pH > 14 ? "invalid" : pH === 7 ? "neutral" : pH <= 6 ? "acidic" : "alkaline"  
}

function pHName(pH) {
	return pH>0&&pH<7?"acidic":
	       pH==7?"neutral":
	       pH>7&&pH<=14?"alkaline":"invalid";
	
}

function pHName(pH) {
	if( pH >=0 && pH <= 6)
		return "acidic";
	else if(pH === 7)
		return "neutral";
	else if(pH > 7 && pH <= 14)
		return "alkaline";
	else
		return "invalid";
}

const REGEXP = /\D/g;

const REGEXP = /\D */g

const REGEXP = /\D+/g;

const REGEXP = /\D/g;
const str = `"242Edabit23 45can344 3be3 254324addictive!"`;
const validate = (REGEXP) => {
    if(!/\\D/.test(String(REGEXP))) return () => "required"
    return function testReg(str) {
        return str.match(REGEXP).join("")
    }
}

const testExp = validate(REGEXP)
console.log(testExp(str));


const str = "242Edabit23 45can344 3be3 254324addictive!";

let REGEXP = /[^0-9]/.exec(str);
return REGEXP;


const amazingEdabit = s =>
 !s.includes('edabit') ? s.replace(/amazing/,'not amazing') : s;

 amazingEdabit=s=>/edabit/.test(s) ? s : s.replace("is","is not")

 function amazingEdabit(str){
  	if (!str.includes("edabit")) 
			return str.replace("amazing","not amazing");
	return str;
}

function amazingEdabit(str){
  	return str.includes("edabit") ? str : str.replace("amazing", "not amazing")
}

function amplify(num) {
	var a = [];
	for(var i = 1; i <= num; i++){
		if(i % 4 == 0){
			a.push(i*10);
		}else{
			a.push(i);
		}
	}
	return a;
}

amplify=n=>n==1?[1]:amplify(n-1).concat([n%4?n:n*10])

const amplify = (num) => {
	let result = [];
	for (let i = 1; i <= num; i++) {
		result.push(i);
	}
	return result.map(x => x % 4 == 0 ? x*10 : x);
}


function halloween(dt) {
 if(dt.getMonth() == 9 && dt.getDate() == 31){
	 return "Bonfire toffee";
 }else{
	 return "toffee";
 }
}

const halloween = dt => dt.getMonth() === 9 && dt.getDate() === 31 ? "Bonfire toffee" : "toffee";

function halloween(dt) {
	var m = dt.getMonth() 
	var d = dt.getDate()
	
	if (m == 9 && d == 31) {
		return "Bonfire toffee"
	} else {
		return "toffee"
	}
}

function halloween(dt){
    return (dt.getDate() === 31 && dt.getMonth() === 9) ? "Bonfire toffee" : "toffee";
}


const findFactors = num => [...Array(num + 1).keys()].filter(i=>num % i === 0);

const findFactors = n => 
  n < 1 ? [] : Array.from({length: n + 1}, (_, i) => 
    !(n % (i + 1)) ? i + 1 : 'x').filter(Number);

    function findFactors(num) {
	let res =[]
	for (let i = 1; i < num+1; i++) {
		if(num%i==0)res.push(i)		
	}
	return res
}

function findFactors(num) {
	arr = [];
	for(i=1;i<=num;i++){
		if(num%i==0){
			arr.push(i)
		}
	}
	return arr;
}

function findFactors(num) {
	let factors = [];
	for(let i=1; i<=num; i++ ){
		if(num%i == 0){
			factors.push(i);
		}
	}
	return factors;
}

function findFactors(num) {
	factors=[]
	if(num<=0){
		return []
	}
	else{
		for(i=1;i<=num;i++){
		if(num%i==0){
			factors.push(i)
		}
	}
	}
	return factors
	
}