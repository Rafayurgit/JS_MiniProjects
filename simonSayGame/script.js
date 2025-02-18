let gameSeq=[];
let userSeq= [];

let started = false;
let level =0;

document.addEventListener("keypress", (event)=>{
    if(!started && event.key=== "Enter"){
        console.log("Game started");
        started=true;
    }
})

