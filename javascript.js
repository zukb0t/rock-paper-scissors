let humanScore = 0;
let computerScore = 0;



//0 is rock, 1 is paper, 2 is scissors

//paper beats rock 1 > 0
//scissors beat paper 2 > 1
//rock beats scissors 0 < 2

//there are 6 possible outcomes.
//human beats bot  paper > rock
//human beats bot  scissors > paper
//human beats bot  rock > scissors
//bot beats human  
//bot beats human
//bot beats human


function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer =computerChoice.toLowerCase();
    if (human === computer){
        console.log("draw");
    }
    else if(human === "rock"){
        if(computer==="scissors"){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    else if(human === "paper"){
        if(computer==="rock"){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
    else{
        if(computer==="paper"){
            humanScore++;
        }
        else{
            computerScore++;
        }
    }
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
};

function getHumanChoice(){
    return prompt("Select Rock, Paper, or Scissors.");
};


for(let i = 0; i < 6; i++){
    playRound(getHumanChoice(), getComputerChoice());
}

if(humanScore === computerScore){
    console.log("game ended in a draw");
}

else if (humanScore > computerScore){
    console.log("congrats!, you won");
}

else{
    console.log("you lose!");
}

