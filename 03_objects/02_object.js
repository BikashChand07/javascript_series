// this is the way of declaring singleton object. Object() =constructor
// const user=new Object({
//     name:"BikashChand",
//     age:22,
//     qualification:"bachelor"
// })
// console.log(user)

//objects inside object ie object as a properties of another object

// const user={
//     email:"hero@gmail.com",
//     fullname:{ // here fullname is oject inside the object user
//                username:{// username is object inside the object fullname
//                 firstname:"Bikash",
//                 lastname:"Chand"
//                }
//     }
// }
//  console.log(user.fullname.username.lastname)

//merging of objects
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// const obj3= Object.assign({},obj1,obj2)// here {} is the target and obj1 and obj2 are the source ie
// // the obj1 and obj2 are combined and store to target {} and finally assign to obj3
// console.log(obj3)

// const obj3= {...obj1, ...obj2}// this method is also used to merge the objects
// console.log(obj3)

// getting object keys and values
 const user=new Object({
    name:"BikashChand",
    age:22,
    qualification:"bachelor"
})
// syntax: Object.keys(name of object) and Object.values(name of object)
 console.log(Object.keys(user))// keys of object user is [ 'name', 'age', 'qualification' ] (in array format)
 console.log(Object.values(user))// values of object keys is [ 'BikashChand', 22, 'bachelor' ]

 // to check whether object has specified property or not
//  objectname.hasOwnProperty(name of property) it returns boolean value
console.log(user.hasOwnProperty('age'))//returns true
console.log(user.hasOwnProperty('email'))// returns false because email is not the property of object uset