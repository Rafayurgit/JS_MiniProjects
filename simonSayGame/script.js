let gameSeq=[];
let userSeq= [];
let btns=["yellow","red", "green", "purple"];
let h3= document.querySelector("h3");
let started = false;
let level =0;

document.addEventListener("keypress", (event)=>{
    if(!started && event.key=== "Enter"){
        console.log("Game started");
        started=true;

        levelUp();
    }
})

function levelUp(){
    level++;
    h3.innerText=`level ${level}`;

    let randIndx= Math.floor(Math.random()*3);
    let randColr=btn[randIndx];

    let randBtn= document.querySelector(`.${randColr}`)

    gameSeq.push(randColr);
    btnFlash(randBtn);

}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 250);
}


let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress)
}

checkAns=()=>{
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length===gameSeq.length){
        setTimeout(levelUp, 1000)
       }
    }else{
        h3.innerText=`Game Over ! press any key to start the game`
    }   
}

function btnPress(){
    let btn= this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");

    userSeq.push(userColor)
    console.log(this);

    checkAns(userSeq.length-1);
}

