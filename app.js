let boxes=document.querySelectorAll(".boxes");
let msghidden=document.querySelector(".msghidden");
let winner=document.querySelector(".winner");
let reset=document.querySelector("#reset");



let turnO =true;

const poss=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
let cntclick=0;

boxes.forEach((box) => {

    box.addEventListener("click" ,()=>{
       if(turnO){
        box.innerText="O"
       turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       cntclick++;
    
      checkwin(cntclick);
    
    
      
       
    });
    
   
});

let gowinner=(pos1)=>{
    winner.innerText=`congrats winner is ${pos1}`;
    msghidden.classList.remove("hide");
}
let stopgame=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
 let startgame=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
reset.addEventListener("click",()=>{
    turnO=true;
    startgame();
    msghidden.classList.add('hide');
});


const checkwin = (cntclick) =>{
    let draw=true;
    for(pattern of poss){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
       if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1==pos2&&pos2==pos3){
        stopgame();
        gowinner(pos1);
        draw=false;
        return;
        }
  
       }
    }
    if(draw&&cntclick==9){
        winner.innerText=`draw`;
        msghidden.classList.remove("hide");
    }
    
}


