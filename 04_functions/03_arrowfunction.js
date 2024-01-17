/*In regular function: function definition= function nameoffunctoon(){ }
But in arrow function there is no need of function keyword and name of function 
simply we write ()=>{ }

in arrow function you cant use this keyword
*/

//regular function
// const showname= function()
// {
//     console.log("Its me Bikash Chand")
// }
//  console.log(showname())

 // arrow function
// const showname= ()=>{
//     console.log("Its  Bikash Chand")
// }
// console.log(showname())

//Before defining arrow function you cant call the arrow function but in regular function ypu can call function anywhere
// showname()// Cannot access 'showname' before initialization
// const showname= ()=>{
//     console.log("Its  Bikash Chand")
// }

// arrow function with paramters
// const sum=(num1,num2)=>{
//     console.log("The sum is :",num1 + num2)   
// }
// sum(2,3)

//------------------Important-----------
//implicit return: when there is one line processing then you can use implicit return
// const sum=(num1,num2)=> num1 + num2// it is similar to return num1 + num2
const sum=(num1,num2)=> (num1 + num2)
// if we use {} then return keyword is used .
console.log(sum(4,6))

//object return:
// const return_object_example=()=>({name:"Bikash Chand"})
// console.log(return_object_example());

//array return
const return_array_example=()=>([1,2,3,4,5])
console.log(return_array_example());