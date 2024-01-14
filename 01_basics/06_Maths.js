//Math is an object which has some methods like abs(),round(),ceil(),floor(),round(), sqrt(),max(),min()....
// to use these methods use'.' eg Math.abs(-2),Math.ceil(2.3),Math.round(2.33),.....

// console.log(Math);
// console.log(Math.abs(-16))// expected output=16
// console.log(Math.ceil(2.3))//expected output=3, it provides uppervalue
// console.log(Math.floor(2.3))// expected output=2, it provides lowervalue
// console.log(Math.sqrt(16))// expected output=4
// console.log(Math.max(12,234,5556,322,90))// expected output=5556, gives maximum value from given array
// console.log(Math.min(12,234,5556,322,90))//expected output= 12, gives minimum value
// console.log(Math.round(12.33))// round to the nearest number
//----Important method ie random()---------

// Math.random()= gives random number between 0 to 1 like 0.01,0.1,0.2,0.6,....
// to acheive a number like 1.21,2.345,3.12,4.02... multiply Math.round() with 10 it shifts one digit left
//Math.random()*10
// (Math.random()*10)+1 =  provides the integer except 0 
/* when we do Math.random()*10 +1 it gives number like 1.32,3.23,..
 to get number without decimal part(like 1,3,4,5,) use floor or ceil method ie Math.floor((Math.random()*10)+1)
 or Math.ceil((Math.random()*10)+1)

 suppose if we want a random number between min=30 and max= 40 then use this formula
 Math.floor(Math.random()*(max-min+1))+min// add min to get a values in the range of (min and max)
*/

// console.log(Math.random())// 0.23,0.03,0.45,0.89
// console.log(Math.random()*10)//5.202,1.0883,3.09,7.99
// console.log((Math.random()*10)+1)//if random number is 0.01 , after multiply by 10 we get 0.1 so to remove 0 we add 1
// console.log(Math.floor((Math.random()*10)+1))// gives number like 1,4,2,.. can also use ceil()

// to get random numbers between 20 and 30
const min=20;
const max=30;
console.log(Math.floor((Math.random()*(max-min+1))+min))
