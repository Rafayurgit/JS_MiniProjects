let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreboard=document.querySelector("#user-score");
const compScoreboard=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["rock","paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    
    msg.innerText="Game was draw!";
    msg.style.color = "grey";
};

const showWinner=(userWin, userChoice, compChoices)=>{
    if(userWin){
        userScore++;
        userScoreboard.innerText=userScore;
        console.log("You won");
        msg.innerText=`You Won: ${userChoice} beats ${compChoices}`;
        msg.style.color = "green";

    }else{
        compScore++;
        compScoreboard.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You Lose: ${compChoices} beats ${userChoice}`;
        msg.style.color = "red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice", userChoice);
    const compChoices=genCompChoice();
    console.log("Comp choice", compChoices);

    if(compChoices === userChoice){
        drawGame();
    }else{
        let userWin=true;{
            if(userChoice==="rock"){
                userWin= compChoices==="paper" ? false : true;
            }else if(userChoice==="paper"){
                userWin= compChoices==="scissor" ? false : true;
            }else{
                userWin= compChoices==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoices);
        }
    }
};

choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    })
})


function refreshPage() {
    window.location.reload();
}
