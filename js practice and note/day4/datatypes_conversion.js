let name = "majdi05"
let age = 18
//let isLogedIn = true
let score = null

/* let ValueInNumber = Number(name)
console.log(typeof ValueInNumber);// number
console.log(ValueInNumber); // NaN
*/

/* let ValueInNumber = String(age)
console.log(typeof ValueInNumber);
console.log(ValueInNumber) */

// "33"=> 33
// 33abc => NaN
// true => 1; false => 0

let isLogedIn = 1

let booleanIsLoggedIn = Boolean(isLogedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; 
// "majdi" => true;


// ******************************************operation*******************************************************

let value = 3
let negvalue = -value

// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);
 
//********************** concatation********************


let str1 = "hellow"
let str2 = " majdi"

let str3 = str1+str2
 
console.log(str3);

//**********************

// console.log("1" + 2);// 12
// console.log(1+ "2"); // 12
// console.log("1" + 2 + 2); // 122 if string first then all treated as string
// console.log(1 + 2 + "2"); // 32 string is last so first add then concate 1+2=3 and "2" = 32
// console.log(3 +( 4 * (5 % 3)));
// console.log(3 + 4 * 5 % 3); // its not good way so use pranthesis 
// console.log((3 + 4) * 5 % 3);
 
//********************** 

console.log(true); // true
console.log(+ true); // 1
//console.log(true+); // unexpected
console.log(+ ""); // 0 

//********************** 

let gamcounter = 100
gamcounter++
//++gamcounter
console.log(gamcounter);
