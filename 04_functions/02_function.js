// important: rest operator: (...) the rest operator  takes leftover pieces and puts them in an array 
// function multiplevalues(...num){// here num is an array which includes all the values passed during function call
//     return num
// }
//   console.log(multiplevalues("Bikash",20,"Nepal"))

// function multiplevalues1(val1,val2, ...other)
// {
//     // return val1// val1=100, val2=200, and remaining values passed to the array other
//     return other
// }
// console.log(multiplevalues1(100,200,233,442,221))


// 1) passing objects into the functions
const user={
    name:"Bikash Chand",
    email:"bikash@gamil.com",
    address:"nepal"
}
function passingobject(obj1){
    console.log(`username : ${obj1.name} , email :${obj1.email} and address : ${obj1.address}`)
}
// passingobject(user)

//we can directly pass the object to the functions
passingobject(
    {
        name:"Bibek chand",
        email:"Bibek@gmail.com",
        address:"nepal"
}
)


// 2) passing arrays to the functions
const arr=[12,34,245,23,24]
function passingarray(array1)
{
    console.log(`value at index 3 is:${array1[3]}`)
}
// passingarray(arr)

//passing direct array to the functions
passingarray([12,34,245,23,24])
