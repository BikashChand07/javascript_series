// syntax: reduce(callbackfunction, initialvalue)
// callback function has two parameters ie accumulator and current_value
//simply we can say that reduce method performs some operation on every element and returns single value

const nums=[1,2,3,4]

const newnums=nums.reduce( function (accumulator,currentvalue){// in every iteration , the currentvalue holds the array element
    // console.log(` accumulator : ${accumulator} and currentvalue : ${currentvalue}`)
    return accumulator + currentvalue // in next iteration the sum of accumulator and currentvalue is asssigned to the accumulator
},0)// here 0 is the initial value that is assigned to the accumulator
// console.log(newnums) // output =10  


//using arrow function

const  numbers=[1,2,3]
const updatednums=numbers.reduce( (acc,curval)=> acc + curval, 0)
console.log(updatednums)

const shoppingcart=[
    {
        coursename:"Js",
        price:999
    },
    {
        coursename:"Java",
        price:1999
    },
    {
        coursename:"php",
        price:2999
    },
    {
        coursename:"app development",
        price:99999
    }
]

const totalprice= shoppingcart.reduce( (acc,item)=> acc + item.price ,0)
console.log(totalprice)