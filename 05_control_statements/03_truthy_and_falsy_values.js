//falsy values are those which are assumed to be false similarly truthy values are those which are assumed to be true
//falsy values= false, 0, -0, BigInt(0n), ""(empty string), null ,undefined, NaN(Not a number)
//truthy values:
/*
1) "0"(not falsy values because this is a string and which is not empty)
2)"false" or 'false'= both are true values beacuse both are string and not empty
3)" " = this is string which is not empty since it contains space which is not consider as empty string
4) {}=empty object which is also truthy value
5) []=empty array which is also truthy values
6) function(){}=empty function which is trurthy values
*/

//to check empty array

const myarray=[]// empty array
if(myarray.length === 0)
{
    console.log("empty array")
}
else{
    console.log("not empty array")
}

// to check empty object

const myobj={}// empty object
if(Object.keys(myobj).length === 0)// here Object.keys(myobj) returns the array of keys of object then we use length property to keys array to check emptyness
{
    console.log("empty object");
}
else
{
    console.log("not empty object");
}

//The nullish coalescing ( ?? ) operator :
//is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand
let value1
let value2
// value1=5 ?? 10
// console.log(value1) // when both are values then left hand side value is assigned

// incase of null or undefined:
//when there is null or undefined on the left side then the right hand side value is asssigned to the variable
// simply if there is null or undefined value than the other value is assigned in that case

value1=null ?? 15
console.log(value1)// 15 is assigned 

value2= 30?? undefined 
console.log(value2)// 30 is assigned to the value 2