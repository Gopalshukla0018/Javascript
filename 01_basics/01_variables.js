const accountId = 1443
let accountEmail = "gopalshukla0018@google.com"
var gaccountPassword = "12345"
let accountState;
accountCity = "jaipur"  /*not good way*/

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);