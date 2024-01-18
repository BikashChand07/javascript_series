// while loop
// syntax:
// initialization
// while(condition)
// {
//     increment/decrement
// }

// let index=1
// while(index<=10)
// {
// console.log(index)
// index++
// }


// let i=1
// console.log("multiplication table of 6 : ")
// while(i<=10)
// {
//     console.log(6 + "*" + i + "="+ 6*i )
//     i++
// }

let myarray=[12,23,221,22,111]
let arr=0;
while(arr<myarray.length)
{
    console.log("arrray element at index : "+ arr + " is "+myarray[arr])
    arr++
}

// Do_while loop
// first the statement inside do{} is executed then the condition checked
// /*syntax:
// initilization
// do{
// statements
// increment/decrement
// }while(condition)
// */

// let x=1
// do{
//     console.log(x)
//     x++
// }while(x<=10)