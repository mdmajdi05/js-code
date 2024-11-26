const arr = [2,4,8,5,'majdi']
// console.log(arr[3]);

const arr2 = new Array(7,8,9,10,11,12,13,80)
// console.log(arr2);

// array methods

arr.push(9)
arr.pop()// it will delete last element of array

arr.unshift(15) // it will ad the 15 in at 0th index
arr.shift() // it will delete the value of 0th index

// console.log(arr.includes(10));// id value exist then answer will be true or false
// console.log(arr.indexOf(4));// if exist then answer will be index or -1

const newArr = arr.join() // join will change the array in string and bound all element commas seprated


const arr3 = arr.concat(arr2)

 const arr4 = arr+arr2 // its not way of join two array if you use this you array will be consider as a string all value is single value
 
//  //console.log(arr);


//slice , splice 
console.log("a", arr);
const myArr = arr.slice(1, 3)
console.log(myArr);
console.log("b", arr);
const myArr1 = arr.splice(2, 4 ) // if i use "splice" it will change the array and 



console.log(myArr1);
console.log("c", arr);


