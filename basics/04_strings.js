/*to concatenate string + opearator is used. example:
let username="Bikash"
let gmail="bikash@gmail.com"
console.log("Username: "+ username+" and Gmail: "+gmail)//conactenation of strings
this method of string concatenation is not good practice so use string interpolation methods
*/

/*---- Important----
string interpolation method to concatenate strings use backticks. use syntax ${variablename} when we use this 
syntax we can direct apply string methods to strings eg ${variablename.stringmethod()}
example
 let username="Bikash"
 let gmail="bikash@gmail.com"
 console.log(`username is ${username} and gmail is ${gmail}`)// this is good practice so always prefer to use this
*/

// another method to declare string using new and String('strings') constructor

// const name=new String('Bikash Chand')
/* returns object as value pair
 0:"B"
 1:"i"
 2:"k"
 3:"a"
 4:"s"
  and so on ....
 */
// console.log(name)
// console.log(name[0])//returns character at pos 0

// ____________string methods___________
// console.log(name.length)// returns length ie 12
// console.log(name.toUpperCase())// converts every character to UpperCase
// console.log(name.toLowerCase())
// console.log(name.charAt(2))// returns character at specified position
// console.log(name.indexOf("k"))

// const newsubstring= name.substring(0,4)//substring(starting index, last index) here it returns the substring of position 0 to 3 but not include specified last index character 
// console.log(newsubstring)// substring() ignore negative value and starts from 0 position

// const anothersubstring= name.slice(0,4)// same as substring but it can contain negative value also
// console.log(anothersubstring);

// const anothersubstring= name.slice(-12,2)
// console.log(anothersubstring);

// const name= "   Bikash Chand   "// here string contains extra starting and ending spaces
// console.log(name)//before trim
// console.log(name.trim())//  after trim() method ,trim removes the starting and ending  extra spaces


// const name="Bikash Chand"
// console.log(name.replace('Chand','chettri'))// replace(search value or value to be replaced, new value)

// important: includes('item to be searched')method search the specified string that is mentioned inside the includes method in the given string
// example of includes() method: if the item or string is found then it returns true otherwise false
// const word="today is thursday ,thank you"
// console.log(word.includes('thursday'))// it returns true because the string "thursday" is found on the word"
// console.log(word.includes("friday"))// it returns false 

//split() method it splits the strings on the basis of seperator .seperator may be space or anything
const word="today is thursday ,thank you"
console.log(word.split(" "))// splits on the basis of space
console.log(word.split("t"));// splits when it encounters the character 't' in the string word

// and so on..