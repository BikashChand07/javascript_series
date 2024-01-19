//filter method of array:
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
//syntax= arrayname.filter(callbackfunction)// here callback function test some condition and filter method returns the array after the completion of test
// filter method is similar to the forEach() method but foreach() method doesnot returns

const myarray=[1,2,3,4,5,6,7,8,9,10]
 const newarray= myarray.filter( (num)=>
{
return num>4// ie it returns the elements of array which is greater than 4
} )
// console.log(newarray)//[ 5, 6, 7, 8, 9, 10 ]

// as we know foreach method doesnot returns any value .lets check

// console.log(myarray.forEach( (num)=>{
//     return num>4//undefined
// } ))
// so we conclude that foreach() method doesnot return anuy values

// this can be solved by using foreach method using some logic
const newarrays=[]
myarray.forEach((num)=>{
    if(num>4)
    {
        newarrays.push(num)
    }
})
// console.log(newarrays)

//filter method example: consider four books(object) of array 
 const books=[
    {
        bookname:"bookone",
        genre:"history",
        publish_date:1990,
        edition:2010
    },
    {
        bookname:"booktwo",
        genre:"sci-fiction",
        publish_date:2000,
        edition:2015
    },
    {
        bookname:"bookthree",
        genre:"comedy",
        publish_date:2002,
        edition:2020
    },
    {
        bookname:"bookfour",
        genre:"history",
        publish_date:1985,
        edition:2000
    },
    {
        bookname:"bookfive",
        genre:"comedy",
        publish_date:2005,
        edition:2023
    }
 ] 

// console.log( 
//     books.filter( (book)=>
//  {
//     return book.genre === "history"
//  }
//  )
// )
// console.log(  books.filter( (book)=> book.genre === "comedy"))
// console.log(  books.filter( (book)=> book.publish_date >= 2000))
console.log(  books.filter( (book)=> book.edition >= 2015))



