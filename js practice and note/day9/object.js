// object

// singleton means when we create object through constructer
Object.create // this is a constructor method 


// object literal

const sym = Symbol("key1") // this is the symbol formate

const obj = {
    name: "majdi",
    email: "majdi@gmail.com",
    isLoggedIn: false,
    age: 19,
    lastLoginDay:["monday", "tuesday"],
    [sym]: "key1",// symbol
}

console.log(obj[sym]);


// for change the value like

obj.email = "mdmajdi@gmail.com"
console.log(obj["email"]);

// if need to lock the value change  you must put on object

Object.freeze(obj.email) //if i want only one specific lock then like "object.freeze(obj.age)"
obj.email = "mdmajdi05@gmail.com"
obj.age = 20
console.log(obj["email"]);
console.log(obj["age"]);

//Object.freeze(obj) // it will lock entire obj

obj.age = 21

console.log(obj["age"]);

obj.greeting = function(){
    console.log("hellow");
    
}
obj.greeting1 = function(){
   console.log(`Hellow ${this.name}`);
    
}

console.log(obj.greeting());
console.log(obj.greeting1());