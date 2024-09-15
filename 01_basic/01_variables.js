const accountId = 123456;
/* this const keyword is use for const value that is not changeable 
*/
let accountemail = "ashish@gmail.com";
var accountpassword = "12234242";

/* prefer not use the var keyword because issue in block scope and functional scope */

accountCity = "Greater noida";
let accountstate;
console.log(accountId);
console.table([accountId, accountemail, accountpassword, accountstate,accountCity]);
