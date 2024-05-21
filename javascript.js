let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, robotChoice){

}

function getComputerChoice(){
    let max = Math.floor(Math.random() * 3);
    if(max === 0){
        return "Rock";
    }
    else if(max === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("0:Rock, 1:Paper, 2:Scissors");
}

console.log(getComputerChoice());
console.log(getHumanChoice());

