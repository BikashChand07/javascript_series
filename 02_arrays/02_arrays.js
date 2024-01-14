//some more array methods

const marvel_heroes=["Ironman","spiderman","Thor","Hulk","CaptainAmerica"]
const dc_heroes=["Batman","Superman","flash"]

// const super_heroes=marvel_heroes.concat(dc_heroes)
//  console.log(super_heroes)

 // instead of concat methods we can also use spread operator(...)
 //  const desi_heroes=["shaktiman","Hanu MAn","flying jatt","krish"]
//  const super_heroes=[...marvel_heroes, ...dc_heroes, ...desi_heroes]
//  console.log(super_heroes)

 // check whether array or not
 console.log(Array.isArray("Bikash")) // it returns false because "Bikash" is a string not an array

 //convert anything like strings to array
 console.log(Array.from("Bikash"))// output: [ 'B', 'i', 'k', 'a', 's', 'h' ]
  console.log(Array.from({name:"Bikash",age:23}))// it returns empty []  because here from method contains object.
  // ie on what basis object is convert to the array (basis: key, value) name=key "bikash"=value
  // here basis is not defined so it returns empty array[]
 

  // suppose there are 4  students having marks
  let st1=45
  let st2=56
  let st3=66
  let st4=77 
  // now we can convert them into array using of() method
  console.log(Array.of(st1,st2,st3,st4))

