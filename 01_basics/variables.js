/*
In js there are threee ways to declare the variables using three different keywords:
1)var=this is oldest method and it has block scope , not use this for declaring varibales
2)let=prefer to use this method for declaring the variables , it has functional scope
3)const=used to declare constant varibales which are remain unchanged throughout the whole program
in case of const during the declaration of variables the initialization should be done.
*/
const studentId=2
let studentName="Bikash Chand"
var studentEmail="bckjska@gmail.com"
studentpassword="pass123"

studentName="Bibek chand"

// studentId=3//this will throw error beacuse const doesnt allow modification
// console.log(studentId);
// console.log(studentId);
// console.log(studentName);
/*Instead of using console.log for every variables we can use console.table() */
// console.table([studentId,studentName,studentEmail,studentpassword]);
console.log(typeof(studentEmail));
console.log(studentName);//it will display Bibek chand because let and var method allows to update the variables
