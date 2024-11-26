const AccountId = 123456
let AccountEmail = "mdmajdi05@gmail.com"
var AccountPassword = "majdi123"
Accountcity = "Darbhanga"

// AccountId = 1245 its not allowed , value or variable name we cant reassign   

// console.log(AccountId);

//AccountId = 5464 not allowed
AccountEmail = "majdi05@gmail.com"
AccountPassword = "majdi"
Accountcity = "kamtaul"

console.table([AccountId,AccountEmail,AccountPassword,Accountcity])


/* do not use var use only let
because of issue in block scope and functional scope
scope is {}
*/
