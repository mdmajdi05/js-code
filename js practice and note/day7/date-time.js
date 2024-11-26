//Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

//let myDate1 = new Date(2000, 0, 14, 1, 45,10) // this formate is use defaults time formate 'yy-mm-dd' we can specify the month start with 0 
//console.log(myDate1.toLocaleString());

let myDate1 = Date("01-11-2000") // it is the mm dd yy formate
console.log(myDate1.toLocaleString());

// let myStamp = Date.now()
// console.log(myStamp);

console.log(myDate.getMonth()); // you can get a date, time, day

console.log(`date is ${myDate.getDate()} month is ${myDate.getMonth()}` ); // you can use this string method too

console.log(myDate.toLocaleString('Defaults',{
    weekday: "short",
})); // this methode is function based method



