// Array is a container which conatins more than one values under single varibale
// array declaration : let myarray=[0,1,2,4,..]
//another method of array declaration : let myarray=new Array(0,1,2,3...)

// let myarray=[12,34,556,234]
// console.log(myarray)
// console.log(typeof(myarray))// object type

// let newarray=new Array(12,10,45,13,20)
// console.log(newarray)//[ 12, 10, 45, 13 ]
// console.log(newarray.length)

// let city=new Array('kathmandu','mahendranagar','dhangadi')
// console.log(city)

// some array methods

// newarray.push(15)
// console.log(newarray)//[ 12, 10, 45, 13, 15 ] it adds the element to the last index of array and size of array increased by 1

// newarray.pop()
// console.log(newarray)//[ 12, 10, 45 ] it removes the last element from the array and size of array decreased by 1
 
// newarray.unshift(5)
// console.log(newarray)//[ 5, 12, 10, 45, 13 ] it adds the element at 0th index and shift all the elements to the right side and size of array increased by 1

// newarray.shift()
// console.log(newarray)//[ 10, 45, 13 ] it removes the first element by shifting all the elements to the left side and size of array decreased by 1

//important :includes(name of element) it search the element in array and returns boolean value ie either true(if element in found) or false(if element is not found in array)
// console.log(newarray.includes(45))// returns true because it search the array and  found 45 in the array
// console.log(newarray.includes(50))// returns false because 50 is not present in the array

// console.log(newarray.indexOf(10))// it returns the index of element ,syntax: indexof(element)
// console.log(newarray.indexOf(50))// it returns -1 beacuse 50 is not an element of array so it returns index -1

//---important : slice() and splice()
/*slice(firstindex,secondindex): it returns the copy of array according to the specifeid range without change in the original array
suppose array is [ 12, 10, 45, 13, 20 ] 
array.slice(1,3) returns copy of array[10,45] which contains elements of index 1 and 2 but not including the element of last specified index ie 3
original array unchanged: [ 12, 10, 45, 13, 20 ] 

splice(firstindex,secondindex): it extract the element from the array according to the specified index and those elements 
which are extracted are removed from the array .and it also include the element of last index
splice(1,3) :returns [10,45,13]
but original array changed :[12,20]
*/

//slice()method
let originalarray=new Array(12, 10, 45, 13, 20)
// console.log("original array: ",originalarray)
// console.log("after slice method  in a range 1(index) to 3 new array:",originalarray.slice(1,3))// [ 10, 45 ]
// console.log( "original array:",originalarray)// no change in original array

//splice()method
console.log("original array: ",originalarray)
console.log("after splice method  in a range 1(index) to 3 new array:",originalarray.splice(1,3))//[ 10, 45, 13 ]
console.log("original array: ",originalarray)// [ 12, 20 ]

