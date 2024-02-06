class user{
    constructor(username,email)
    {
        this.username=username;
        this.email=email
    }
    showdetails(){
        console.log(`Username: ${this.username} Email: ${this.email}`)
    }
}
const user1=new user("Bikash","bikash@gmail.com")
// when the new keyword is used by default the constructor is called.
console.log(user1)
console.log(user1.showdetails())


// this can also be done by constructor function
// function user(username,email)
// {
//     this.username=username;
//     this.email=email;
//     return this
// }
// user.prototype.showdetails=function(){
//     console.log(`username:${this.username} email:${this.email}`)
// }

// const user1=new user("Bikash", "bikash@gmail.com")
// // console.log(user1)
// console.log(user1.showdetails())