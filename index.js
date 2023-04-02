const player=document.querySelector("#playerText");
const computer=document.querySelector("#compuerText");
const result=document.querySelector("#resultText");
const choiceBtns=document.querySelectorAll(".choiceBtn");
let Player;
let Computer;
let Result;

choiceBtns.forEach(button=>button.addEventListener("click",()=>{
    Player=button.textContent;
    computerTurn();
    player.textContent=`Player: ${Player}`;
    computer.textContent=`Computer: ${Computer}`;
    result.textContent=checkWinner();
}));

function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            Computer="Rock";
            break;
        case 2:
            Computer="Paper";
            break;
        case 3:
            Computer="Scissors";
            break;
    }
}

function checkWinner(){
    if(Player==Computer){
        return "DRAW!";
    }
    else if(Computer=="Rock"){
        return (Player=="Paper")?"You Win!":"You Lose!";
    }
    else if(Computer=="Paper"){
        return (Player=="Scissors")?"You Win!":"You Lose";
    }
    else if(Computer=="Scissors"){
        return (Player=="Rock")?"You Win!":"You Lose";
    }
}