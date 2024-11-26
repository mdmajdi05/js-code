// you can use string with single quots or double both

// concatanation of string in old way

const greeting = "hello"
const name = " majdi"
const age = 21
// console.log(greeting + name);


console.log(`${greeting} my name is ${name} my age is ${age} `);
//  you can use this types like, console.log(`${greeting.bold} my name is ${name.italics} my age is ${age} `);

const gameName = new String('majdi')
console.log(gameName.charAt(0));
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

const newstring1 = gameName.substring(0, 4)
// in substring no negative value allowed like const newstring = gameName.substring(-8, 4)
console.log(newstring1);



const newstring2 = gameName.slice(0, 4)
console.log(newstring2);

const newstring3 = gameName.slice(-4, 5)
console.log(newstring3);


const newstring4 = "   majdi   "
console.log(newstring4.trim());


// %20 mean space an trough the replace property we can replace it like this given below example 
const url = "https://majdi.com/majdi%20technology"

console.log(url.replace('%20', '_'));


// through the include property we can serach the keyword like this given below example 

console.log(url.includes("majdi"));
console.log(url.includes("md majdi"));

// we can make array from line of string on the basis of any given of seprator like this given below exqmple


const astring = 'md_majdi_05'
console.log(astring.split('_'));// the output will be:--> [ 'md', 'majdi', '05' ]



 // NOTE:-> GOTO BROWSER CONSOLE AND RUN "const str1 = new String('majdi')"" and console.log(str1) and hit enter and read all proto property