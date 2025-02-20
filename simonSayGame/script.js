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
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randIndx= Math.floor(Math.random()* btns.length);
    let randColr=btns[randIndx];
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

checkAns=(idx)=>{
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp, 1000)
       }
    }else{
        h3.innerHTML=`Game Over ! <b>${level}</b> <br/> press Enter to start the game`
        document.querySelector("body").style.background="Red"
        setTimeout(()=>{
            document.querySelector("body").style.background="white"
        },150)
        reSet();
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

reSet=()=>{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}