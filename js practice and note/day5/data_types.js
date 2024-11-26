// ***** Primitive********* 

// 7 types : string, nummber, boolean, null, undefine, symbole, BigInt


//symbol its is unidque
  const id = Symbol('123')
  const id2 = Symbol('123')
console.log(id===id2);

// big int 
const bigNumber = 889878897867867979879n
console.log(typeof bigNumber);
// **********Refrance (non primitive)**********
 
 // array, objects,functons 

 //array :-- object
const heros = ["salmankhan", "srk","amirkhan"];


//object :-- object
const myobj = {
    name:  "majdi",
    age: 20,
}

//function :-- tyoeof --> funtion object

const myfunc = function(){
    console.log("hellow world");
}
console.log(typeof myobj);

// all non primitive data types returns when we check typesof of that they always return object

//==================================================================

// there is two types of memory 

// stack (primitive) :-- in stack memory the variable decleared by you you get only copy of variable, 
//heap (non primitive) :-- reffrance of origional 


// stack

// let myemail = "majdi@gmail.com";
// let myemail2 = myemail
// myemail2 = "mdmajdi05@gmail.com";

// console.log(myemail2);
// console.log(myemail);

// heap

let myobj1 = {
  name:  "majdi",
  age: 20,
}

let mydeatails = myobj1;
myname.name = "mj";
console.log(mydeatails.name);
console.log(myobj1.name);

// stack and heap example by image is in this folder 