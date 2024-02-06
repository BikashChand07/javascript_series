//Object= collection of properties and methods(Object literals)
const users={
    username:"Bikash Chand",// here username, age are the properties of object user and helloworld is the method
    age:20,
    helloworld:function (){
        // console.log("hello world!");
    // console.log(`hello ${username}`)// error: username is not defined. This is because we have to refernce the current object(context) so use this keyword.
    // console.log(`hello ${this.username}`)
    // console.log(this)
    }
}
// console.log(user);
// console.log(user.username)
// console.log(user.helloworld())

// console.log(this)//(global context) =it gives window object


//-----constructor function:-

//new keyword is a constructor function ie it allow to create multiple(different) instance every time from one object literal

function user(username,age,isloggedIn)// constructor function
{
    this.username=username;// left hand side value(this.username) is variable and right side value is parameter
    this.age=age;
    this.isloggedIn=isloggedIn

    //method:
    this.show=function(){// show is a method
        console.log(`hello ${this.username}`)
    }

    return this
}
// const userone = user("Ramu",20,true)
// const usertwo=user("shyamu",21,false)
// console.log(userone)//problem: here the value of userone is overwrite by usertwo therefore use new keyword so that every time it gives new instance(reference(or copy)) 

const userone = new user("Ramu",20,true)
const usertwo= new user("shyamu",21,false)
console.log(userone)
console.log(userone.constructor)

/*note about new keyword:
1) when new keyword is used  ,a new empty object is created called instance
2)constructor function is called beacuse of new keyword 
*/





