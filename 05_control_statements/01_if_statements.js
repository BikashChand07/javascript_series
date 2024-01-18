// if statements

const isuserloggedin=false
if(isuserloggedin)
{
    console.log("you logged in")
}
else
{
console.log("you are not logged in")
}

const age=20
// if(age<18)
// {
//     console.log("You are not adult")
// }
// else
// {
// console.log("You are adult")
// }

//  example:according to age give discount
 if(age<=10)
 {
    console.log("You will get 10% discount")
 }
 else if(age>10 && age<25)
 {
    console.log("sorry you will not get any discount")
 }
 else if(age>=25 && age<50)
 {
    console.log("you will get 5% discount")
 }
else if(age>=50)
 {
    console.log("you will get 20% discount")
 }

 // "==" and "===" operator
 //== operator compares the values only eg 2=="2" returns true
 //=== operator compares the value as well as datatypes also eg 2==="2" returns false because "2" is a string while 2 is a number so not matched
// if(2=="2")
// {
//    console.log("Matched successfull")
// }
// else
// {
//    console.log("not matched");
// }

if(2==="2")
{
   console.log(" matched")
}
else{
   console.log(" not matched");
}

//ternary operator
// syntax: condition?true statement:false statement
let agenumber=20
agenumber>=18?console.log("You are eligible for vote"):console.log("you are not eligible for vote")
