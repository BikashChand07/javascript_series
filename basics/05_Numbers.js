const marks =100// it automatically understood that 100 is a number
// console.log(marks)
// console.log(typeof marks)// number type

const num=new Number(1000)// it explicitly describes that 1000 is number there is differnece between above method
// and this method that is when we decalare number by this we have several numbers related methods like
//toFixed,toString,toLocaleString,toPrecision,...
// console.log(typeof num)// its type is object
console.log(num)

// number methods

console.log(typeof (num.toString()))

console.log(num.toFixed(2))// after decimal two digits are fixed eg 1000.00

const number= 45.56363333
console.log(number.toFixed(3))// after decimal point 3 digits are fixed ie 45.564

console.log(number.toPrecision(2))

const zeros=10000000

console.log(zeros.toLocaleString())//output=10,000,000 ( by default US(american) version) it makes easier to understand and readability
console.log(zeros.toLocaleString('en-IN'))// converts english version to indian version ie 10,000,000 to 1,00,00,000


