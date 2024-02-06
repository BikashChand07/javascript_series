let myname="  Bikash Chand  "
// console.log(myname.trim().length)
//here trim().length is used to give the true length of myname string but this is long process.so our aim is to make a truelength prototype which find the true length of string without first and last unnecessary spaces.

// if we add a prototype to object then string, array,functon, object can also access this prototype because these(string,array,function,object ) are also a object

//so adding prototype to Object
//example:

// let myheroes=["thor","spiderman"]

// let heropower={
//     thor:"hammer",
//     spiderman:"web"
// }

// Object.prototype.superpower=function(){
//     console.log("every hero has superpower")
// }
// heropower.superpower()
// myheroes.superpower()// therfore this prototype superpower is present in all objects ie(array,object,string)

// important: if we add prototype to only arrays then this prototype cannot be access by other objects(like String,function,object) 

let username=" hello bikash   "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`true length is :${this.trim().length}`)
}
username.truelength()
" Bikash".truelength()
"   Ramesh  ".truelength()