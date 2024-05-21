let humanScore = 0;
let computerScore = 0;

//0 is rock, 1 is paper, 2 is scissors

//paper beats rock 
//scissors beat paper 
//rock beats scissors

//there are 9 possible outcomes.
//human beats bot  paper > rock
//human beats bot  scissors > paper
//human beats bot  rock > scissors
//bot beats human  
//bot beats human
//bot beats human

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer =computerChoice.toLowerCase();

    switch(human){
        case ("rock"):
            if(computer==="scissors"){
                humanScore++;
            }
            else{
                computerScore++;
            }
        break;
        
        case("paper"):
            if(computer==="rock"){
                humanScore++;
            }
            else{
                computerScore++;
            }
        break;
        
        case("scissors"):
            if(computer==="paper"){
                humanScore++;
            }
            else{
                computerScore++;
            }
        break;

        default:
            console.log("wrong input");
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

