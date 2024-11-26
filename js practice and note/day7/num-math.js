const number = 400
console.log(number); // 400 by default if check typeof() -> number 

const num1 = new Number(400)
console.log(num1); // then would be [Number: 400]

// we can change the number into string throgh property 

console.log(num1.toString().length);
console.log(num1.toFixed(2)); // answer should be 400.00

const num2 = 23.8955
console.log(num2.toPrecision(3)); // if precison value 2 that would be 24, if value 3 then 23.9

/* note but precision value is depend of the number of value in this you give the value of precision according to number of value like
if you put 1147 and give precision value then it could be in exponensioal value*/


const num3 = 1000000
console.log(num3.toLocaleString()); // if you use this methods then number would be in seprate way with comma like 1,000,000,000
//console.log(num3.toLocaleString('en-IN')); if use 'en-IN' then it will show as indian formate


console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

//+++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

/*console.log(Math.abs(-5)); // abs -> means abslute it will change only neg value to positive value
console.log(Math.round(8.4));// if below the .5 then it will taking 8 if 5 or greater than 5 then it will take 9
console.log(Math.ceil(5.1)); // 6 always grater 
console.log(Math.floor(5.9)); // 5 always lower
console.log(Math.min(3, 4, 2)); // 2
console.log(Math.max(3, 4, 2));// 4
*/

// console.log(Math.random());
// console.log(Math.random()*10); // if value is 0.01566 then again 0 so if it by adding +1
// console.log(Math.ceil(Math.random() * 10) + 1);

// console.log(Math.ceil(Math.random() * 10) + 0.1);
 const min = 10
 const max = 30
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min ));
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min )); 
 console.log(Math.ceil(Math.random() * (max-min +1)+ min ));

