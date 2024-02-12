const boxes=document.querySelectorAll(".box");
const msgpage= document.querySelector(".message-container");
const msg =document.querySelector("#win-message");
const newgamebtn=document.querySelector("#new-game");
const restart=document.querySelector("#rest-btn");


let turn=true;
let count =0;
const winnerPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});


console.log("Hellow");

const gameDraw=()=>{
    msg.innerHTML=`Game is Draw`;
    msgpage.classList.remove("hide");
    disableBoxes();
}

const newGame=()=>{
    turn=true;
    enableBoxes();
    msgpage.classList.add("hide");

}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgpage.classList.remove("hide");
    disableBoxes();
}

function checkWinner(){

    for(let pattern of winnerPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        

        if(pos1val !==""&& pos2val!=="" && pos3val!==""){
            if(pos1val === pos2val && pos1val===pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }

    }
}

newgamebtn.addEventListener('click', newGame);
restart.addEventListener('click', newGame);






