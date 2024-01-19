// https://tooabstractive.com/how-to-tech/difference-between-map-and-filter-in-javascript-with-example/
/* map() and filter() are methods in JavaScript that are used to perform operations on arrays. 
When the operation or transformation is done, a new array is returned as a result.
The map method transforms each element of an array and creates a new array with the transformed values,
 while the filter method creates a new array by selecting only the elements that satisfy a specified condition.

simply map() method is used when there is a need to apply some operation(given in callback function) on every array element 
and it returns new array of same length but different values

and filter() method is used when there is a need of some  elements based on condition(or those elements which pass the test ) from array without change in original array elements 
returns new array iof elements which satisfied the test(given in callback function)

syntax is same ie: arrayname.map(callbackfunction)
*/

const my_array=[1,2,3,4,5,6,7,8,9,10]
const new_array= my_array.map( (num)=> num*2  )// ie it returns an array in which every element of original array is multiplied by 2
console.log(new_array)

//chaining : when more than one times the methods are used on same arrays then it is called chaining
// like : arrayname.map().map().filter()// in 2nd map the arrays returned from map1 is passed similarly
// in filter method the returned array from 2nd map is passed 

const  arr=[1,2,3,4,5,6,7,8,9,10]
const newarray = arr.map( (num)=>num * 2 ).map( (num)=>num + 10).filter( (num)=> num >=25 )
console.log(newarray)