// arrayname.forEach(callbackFn)
/*callback function :A function to execute for each element in the array. Its return value is discarded.
 The function is called with the following arguments:

element:
The current element being processed in the array.

index:
The index of the current element being processed in the array.

array:
The array forEach() was called upon.
*/

const heroes=["Rajesh Hamal","Nikhil upreti","Bikash Chand"]
heroes.forEach(function (item){// forEach(callbackfunction)// callback function is simply a function without name
    console.log(item)// in item ie function argument ,every arrays item is placed into the item argument
})

// we can also use arrow function
heroes.forEach((item)=>{
    console.log(item)

})

//other parameters of callback function

heroes.forEach((item,index,arr)=>{
    console.log(item,index,arr)
    /* expected output
    Rajesh Hamal 0 [ 'Rajesh Hamal', 'Nikhil upreti', 'Bikash Chand' ]// rajesh hamal =item, 0= index, remaining is array
    Nikhil upreti 1 [ 'Rajesh Hamal', 'Nikhil upreti', 'Bikash Chand' ]
    Bikash Chand 2 [ 'Rajesh Hamal', 'Nikhil upreti', 'Bikash Chand' ]
    */
})


//Important object inside array ie[{},{},{},{}]

const arr=[
    {// item 1 (object 1)
       username:"Bikash Chand",
       email:"bikash@gmail.com" 
    },

      { // item 2
        username:"Bibek chand",
       email:"bibek@gmail.com" 
    },

      { //itme 3
        username:"sandip chand",
       email:"sandip@gmail.com" 
    },

      {//item 4
         username:"Laxman Chand",
        email:"Laxman@gmail.com" 
    }
]

arr.forEach((item)=>{
console.log(item.username)
console.log(item.email)
})