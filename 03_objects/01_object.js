// way of defining object  objectname={ key:value pairs}
const user={ 
    name:"Bikash chand",
    age:20,
    location:"mahendranagar",
    email:"bikki@gmail.com",
    gender:"male"
}

//accessing object properties
// console.log(user['name'])
// console.log(user['email'])
// console.log(user.name)// this can also be used

 // important how can you use symbol in object properties

 const mysymbol= Symbol("mykey")// here mysymbol is a symbol with value mykey
  // now adding this to the object as properties

  const info={
    name:"Bibek chand",
    age:19,
    [mysymbol]:"symbol as object properties"
  }

  //console.log(info)
//   console.log(info[mysymbol])// accesing symbol property


  // we can lock the object to change
//   Object.freeze(user) 

//   user.name="shyam"
//   console.log(user['name'])// output :Bikash chand ie no change in the name properties because object user is freeze

  // adding functions to the objects
  // here welcome is the name of function and user is the object
user.welcome = function(){
    console.log(` Hello, welcome Mr ${this.name}`)// 'this' is used to point to the current object ie it ponts to the object user
// to access the properties of object 'this' is used
}

  console.log(user.welcome())
