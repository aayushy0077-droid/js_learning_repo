const accountId = 144553 
let accountEmail = "aayush@google.com"
var accountPassword = "1234"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // now allowed
accountEmail = "aayu@aa.com"
accountCity = "england"
accountPassword = "212121"

/*
prefer not to use var because of the block scope issue
*/
console.log(accountId);
console.table([accountId,  accountEmail, accountCity, accountPassword, accountState])

