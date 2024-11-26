const arr = [2,4,8,5,'majdi']
const arr2 = new Array(7,8,9,10,11,12,13,80)

// arr.push(arr2) // it will make array in into array
// console.log(arr);
// console.log(arr[5][1]); // finding array into array element

const allarr = [...arr, ...arr2] // this is a highly usable method for combine two or more array by spreding methods
//console.log(allarr);

const arrInarr = [1, 2, 3, [4,5], 6, [7, 8]]
const arrInarr1 = arrInarr.flat(Infinity)
// console.log(arrInarr1);

console.log(Array.isArray("majdi")); // false
console.log(Array.from("majdi")); // it will make every letter as a array element
console.log(Array.from({name: "majdi"}));// intresting

let score1 = 100
let score2 = 200
let score3 = 300

 console.log(Array.of(score1, score2, score3));
 