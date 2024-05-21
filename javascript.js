let humanScore = 0;
let computerScore = 0;



//0 is rock, 1 is paper, 2 is scissors

//paper beats rock 1 > 0
//scissors beat paper 2 > 1
//rock beats scissors 0 < 2


function playRound(humanChoice, robotChoice){
    if (humanChoice === robotChoice){
        console.log("draw");
    }
}

const getComputerChoice = function(){
    return Math.floor(Math.random() * 3);
};

function getHumanChoice(){
    let choice = prompt("Welcome to a game of Rock, Paper," +
    "Scissors. Pick a value between 0-2, where 0 is rock, 1 is paper, 2 is scissors.");
    return Number(choice);
};


for(let i = 0; i < 6; i++){
    playRound(getHumanChoice(), getComputerChoice());
}

