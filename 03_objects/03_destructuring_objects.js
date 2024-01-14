// destructuring objects
const user={
    fullname:"BikashChand",
    qualification:"bachelor",
    favorite_sport:"cricket"

}

// to use these valuse we simply use user.fullname,user.qualification ....
/* if we want to use these values in multiple places we have to write full synatax like user.fullname
which is time consuming if name of property is large .so we use object destructuring
*/
// const {fullname}=user// here instead of user.fullname we can use only  fullname to access the values
// console.log(fullname)//expected output: BikashChand

//we can also assign name for the fullname(fullname is large to write so simply we  assign name which is easier to write)

const {fullname: Name}= user// now instead of fullname we can use only name to access the values
console.log(Name)//expected output: BikashChand

// similarly we can destructure the other properties
 const {favorite_sport}=user
 console.log(favorite_sport)

 const{favorite_sport:sport}=user
 console.log(sport)