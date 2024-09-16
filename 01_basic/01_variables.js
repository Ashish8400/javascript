const accountId = 123456;
/* this const keyword is use for const value that is not changeable 
*/
let accountemail = "ashish@gmail.com";
/* let is way to declare the vrriable. if we can declare the varriable ones then we can not declare with same name of varriable*/
var accountpassword = "12234242";

/* prefer not use the var keyword because issue in block scope and functional scope and if we can declare ones then also we can delare with same name  another varriable */

accountCity = "Greater noida";
let accountstate;
console.log(accountId);
/* console.log is  fuction that is use in display the message in consolee */
console.table([accountId, accountemail, accountpassword, accountstate,accountCity]);
/* if we use console.table it give the output in table form */