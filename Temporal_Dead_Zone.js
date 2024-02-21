// it occurs in the case of let and const 
// when we declare a varibale by var keyword then you can access that variable anywhere in the program But in case of let and const if you try to access the variable before initialization or declaration it throws a reference error. this is called temporal dead zone.  In the TDZ, a variable exists but it cannot be accessed until it is not declared. so to overcome this problem always hoist the variables at the top of program.
// in case of var keyword it uses a golobal space 
// in case of let and const it uses a seperate memory 
console.log(a);// it will throw a referenece error because let use a seperate memory space 
console.log(b);// it will returns undefined
let a=12;
var b=23;
