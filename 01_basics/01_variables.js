const account_Id = 14572
let account_email = "ry@google.com"
var account_password = "12345"
account_city = "Jaipur"
let account_state;

// account_Id = 2 // not allowed
console.log(account_Id);

account_email = "hc@hc.com"
account_password = "121243"
account_city = "Bengaluru"

/*
    Prefer not to use var
    because of issue in block space and functional scope
*/

console.table([account_Id,account_email,account_password,account_city,account_state])

