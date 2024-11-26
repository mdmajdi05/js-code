const myobj = Object()
const obj = {}

obj.name = "majdi"
obj.email = "emil@gmail.com"
obj.age = 19
obj.kk = false

//console.log(obj);
// console.log(myobj);

const nestedObj = {
    email: "mdmajdi@gmail.com",
    name: {
        profileName: {
            firstName: "Md",
            lastName: "Majdi"
        }
    }
}


//console.log(nestedObj.name.profileName.lastName);

// ++++++++++++++combining two or more object+++++++++++

const ob1 = { 1: "a", 2: "a" }
const ob2 = { 3: "a", 4: "a" }
const ob3 = { 5: "a", 6: "a" }

// const obF = {ob1,ob2,ob3} // its will form nested object so for combining we are not using this
// console.log(obF);

const finalobj = Object.assign({}, ob1, ob2, ob3)
//console.log(finalobj);

// for combining we are highjly using spred methode thats is given blow

const ob4 = { ...ob1, ...ob2, ...ob3 } // this  is good way like array
//console.log(ob4);


//when you get data from database then maybe it wil array of object like 

const users = [
    {
        id: "abc123",
        password: "1234568"
    },
    {
        id2: 122,
        password1: "hkfdasjkgbk"
    },
    {
        id2: 122,
        password1: "hkfdasjkgbk"
    }
]

users[1].id2
users[1].my = "h"
console.log(users);

console.log(Object.keys(users[0]));
console.log(Object.values(users[0]));
console.log(Object.entries(users[0]));


console.log(users[0].hasOwnProperty('id'));

// u can console log in chrome and you can check its prototypes on the chrome