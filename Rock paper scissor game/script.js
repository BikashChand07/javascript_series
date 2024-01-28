let userscore=0;
let compscore=0;

const images=document.querySelectorAll(".image")
const msg= document.querySelector("#msg");

const userscorepara=document.getElementById("user-score")
const compscorepara=document.getElementById("computer-score")

images.forEach( (image)=>{

    image.addEventListener('click',()=>{
    
         const userchoice= image.getAttribute('id')// it will give you user choice
        // console.log("choice was clicked: ",userchoice)
        playgame(userchoice)
    })
    
    })

    // computer choice:
    const gencompchoice=()=>{
        // computer should generate choice like rock ,paper ,scissor. here we use random method to generate random numbers and that will help to access the random index of array which conatin rock,paper,scissor
        const options=["rock","paper","scissor"]
    
        const randomIndex= Math.floor(Math.random()*3)// it will generate numbers between 0 to 1 ie 0,1,2 which will act as random index
      return options[randomIndex]
    }

    // main code of this game:
const playgame=  (userchoice)=>{
    console.log("userchoice is:",userchoice)
    const compchoice=gencompchoice();
    console.log("computer choice:",compchoice)

    // now build a logic

    if(userchoice === compchoice)
    {
        drawgame();
        
    }
    else{
        let userWin = true;
         if(userchoice === "rock")
         {
            // remaining choice for computer  for not draw game: paper and scissor
            userWin=compchoice === "paper" ? false : true;
         }
         else if(userchoice === "paper")
         {
         // remaining choice for computer for not darw the game is rock , scissor
        userWin = compchoice === "scissor" ? false : true;
          }
          else
          {
            //comp rock paper and user= scissor
             userWin = compchoice === "rock"?false: true;
          }
          showwinner(userWin,userchoice,compchoice);
    }

}


const drawgame = ()=>{
    // console.log("Game Draw")
    msg.innerText="Game Draw! Play Again"
    msg.style.backgroundColor="black"
}

const showwinner=(userWin,userchoice,compchoice)=>{
if(userWin)
{
    userscore++;
    userscorepara.innerText=userscore;
msg.innerText=` Hurray....You Win! , your choice(${userchoice}) beats compter choice(${compchoice}) `
msg.style.backgroundColor="green"
}
else{
    compscore++;
compscorepara.innerText=compscore
msg.innerText=` Ohh NO...You Loose!, computer choice (${compchoice}) beats your choice( ${userchoice})`
msg.style.backgroundColor="red"
}
}






