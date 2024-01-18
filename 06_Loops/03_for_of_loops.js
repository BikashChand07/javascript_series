// generally used for arrays ,string

//in case of array
// const myarray=[12,34,22,33,11]
// for (const value of myarray) {
//     console.log(value)
//     }

//     // in case of string
//     const name="Bikash Chand"
//     for (const value of name) {
//         console.log("character=",value)
        
//     }

//Maps
//Map is similar to object but Map donot consider the duplicate entries
const map =new Map()
map.set("Nep","nepal")// nep is key and nepal is value
map.set("ind","india")
map.set("usa","united state of america")

for (const [key,value] of map) {// key contains keys and value contains values
    console.log(`key is ${key} and corresponding value is ${value}`)
}

// imporatant
const myobj={
    username:"bikash chand",
    email:"bcjhkjq@gmail.com"
}
for (const obj of myobj) {
    console.log(obj)//myobj is not iterable
}
// therefore forof loop is not applicable for object