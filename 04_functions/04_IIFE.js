/*IIFE= Immediately Invoked Function Expressions
why to use IIFE?
ans= Avoid polluting the global namespace .
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables.
 If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
  As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
example:
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();
firstVariable and secondVariable will be discarded after the function is executed. 
syntax:
()();
(function definition)( immediately call) and ';' used when there are two IIFE  */

//example:

( function hii(){
    console.log("Hello world")
})();

// incase of arrow function
(()=>{
    console.log("hello Bikash")
})();

//with paramters
( function hii(name){
    console.log(`Hii ${name}`)
})( 'Bikash');//( 'Bikash') = function call with passing parameter string "Bikash"

((name)=>{
    console.log(`This is ${name}`)
})('Bibek');

((num1,num2)=> {
    console.log(num1+ num2)
})(2,3);

( function add(num1,num2){
    console.log(num1+ num2)
}
)(5,5);
