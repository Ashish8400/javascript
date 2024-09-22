let roll = 34
let name="ashish"
//string to number conversion =>

    let num= Number(name)
    console.log(typeof num)
    console.log(num)

//its give a NaN output it. means it not a number because we convert string to number 

//number to string =>

    
    let num1 = String(roll)    
    console.log(typeof num1)
    console.log(num1)

//boolean to string =>
    let booleanInnum = true
    let num3 = String(booleanInnum)
    console.log(typeof num3) 
    console.log(num3)

//string to boolean=>
    let name1 
    //if the variable is undefine then it gives output  is false /and tpe is boolean

    let num4 = Boolean(name1);
    console.log(num4)
    console.log(typeof num4)

    //if the variable should null then it gives false and type is boolean

    let ash = null;
    let ashcheck = Boolean(ash)
    console.log(ashcheck)
    console.log(typeof ashcheck)
    
//number to boolean=>
    let num5= 0
    let rollbool= Boolean(num5)
    console.log(rollbool)
    console.log(typeof rollbool)
    //if we assign the value =0 and then convert the variable in to the boolean then it give flase and if i give the varriable 1 then the output is true and type is boolean 
 


/*             *****  operation  *****             */

/* in java script there are some type of operater 
* assignment operater => = += -= *= /= **= %=
* arithmetic operater => + - * / % ** ++ --
* comparison operater => ++ <> 
* bitwise operater => & | ^ 
* type operater */

console.log("ashish" + 18);//this output is ashish18
console.log(18 + "ashish");//his ouput is 18ashish
console.log(18+19+"ashish");//his output is 37ashish
console.log("ashish" + 12+18);//his output is ashish1218
/**
 * basicallythere is a senario 
 * if your operation started from string data type then then its perform concatination
 * and the thre is number data type then its addition
 */

