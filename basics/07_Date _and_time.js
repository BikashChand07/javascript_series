//Date() is an object

// let date=new Date()// here date is instance of the Date() object
// console.log(typeof date)
// console.log(date)// this provides current date like 2024-01-13T04:56:43.859Z this format is difficult to understand
// console.log(date.toString())// this provides date as a string format like sat Jan 13 2024 04:58:05 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleDateString())//1/13/2024 
// console.log(date.toDateString())//1/13/2024
// console.log(date.toLocaleTimeString())//5:01:05 AM
// console.log(date.toDateString())//Sat Jan 13 2024
// console.log(date.toLocaleString())//1/13/2024, 5:03:37 AM

// let mydate=new Date(2024,0,13)
// console.log(mydate)//2024-01-13T00:00:00.000Z this means month starts from 0
// console.log(mydate.toLocaleString())// 1/13/2024, 12:00:00 AM

// let timestamp= Date.now()
// console.log(timestamp)//1705123165637 time in millisecond
//  console.log(timestamp/1000)//1705123195.96 time in second 
//  console.log(Math.floor(timestamp/1000))//1705123250 second time in second without decimal part

// some more methods related to Date() object

let date=new Date()
console.log(date.getDate())//13 returns current date
console.log(date.getDay())// 6 =no of days
console.log(date.getTime())//1705123508846 millisecond
console.log(date.getFullYear())//2024 
console.log(date.getMilliseconds())//900
console.log(date.getSeconds())//35
