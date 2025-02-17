const ul = document.querySelector("ul");
const task = document.querySelector(".taskInput")
const btn= document.querySelector(".addbtn")


btn.addEventListener("click", ()=>{
    console.log("btn clicked");
    const li= document.createElement("li");
    li.innerText=task.value;

    const deleteBtn= document.createElement("button");
    deleteBtn.innerText="delete"
    deleteBtn.classList.add("delete");

    li.appendChild(deleteBtn)
    ul.appendChild(li);
    task.value="";



// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par= this.parentElement;
//         par.remove();   
        
//     })        
// }
})

ul.addEventListener("click", (event)=>{
    let listItem= event.target.parentElement;
    listItem.remove();
    console.log("ListItem Clicked", listItem);
    
})


