let gameSeq=[];
let userSeq= [];
let btns=["yellow","red", "green", "purple"];

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
    h2.innerText=`level ${level}`;

    let randIndx= Math.floor(Math.random()*3);
    let randColr=btn[randIndx];

    let randBtn= document.querySelector(`.${randColr}`)
    btnFlash(randBtn);

}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 1000);
}


let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function btnPress(){
    console.log(this);
}

