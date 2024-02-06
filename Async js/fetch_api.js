const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact")

// const getfacts= async ()=>{
//     console.log("getting data....")
//     let response = await fetch(URL)
// console.log(response)//JSON format 
// //json() method: returns a second promise that resolves with the result of parsing the response body text as JSON.(input is JSON,output is JS Object)
// let data= await response.json();// simply  .json() converts data to readable format
// console.log(data);
// // console.log(data[0].text);
// factpara.innerText=data[0].text;
// }

//same above process using promise chaining
function Getapi(){
fetch(URL).then((response)=>{
return response.json()
}).then((data)=>{
// console.log(data)
factpara.innerText=data[1].text
})
}