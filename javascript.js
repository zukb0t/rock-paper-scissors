let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer =computerChoice.toLowerCase();
    if(human===computer){
        displayScore(human, computer);
        return;
    }
    switch(human){
        case ("rock"):
            computer==="scissors" ? humanScore++ : computerScore++;
        break;
        
        case("paper"):
            computer==="rock" ? humanScore++ : computerScore++;      
        break;
        
        case("scissors"):
            computer==="paper" ? humanScore++ : computerScore++;
        break;

        default:
            console.log("wrong input");
        }
    
        displayScore(human, computer);
    }


function getComputerChoice(){
    let max = Math.floor(Math.random() * 3);
    return max === 0 ? "Rock"
    : max === 1 ? "Paper"
    : "Scissors";
};

function displayScore(human, computer){
    const human_score = document.querySelector(".humanscore");
    const computer_score = document.querySelector(".computerscore");
    const results = document.querySelector(".results");

    results.textContent = "human chose: " + human + " and " + "computer chose: " + computer; 
    human_score.textContent = "human score: " + humanScore;
    computer_score.textContent = "computer score: " + computerScore;
    scoreboard.appendChild(human_score);
    scoreboard.appendChild(computer_score);
    if(humanScore===5){
        alert("You won!");
    }
    else if(computerScore===5){
        alert("you lost...");
    } 
} 

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scoreboard = document.querySelector(".scoreboard");

rock.addEventListener("click", function(){
    playRound("Rock", getComputerChoice());
});
paper.addEventListener("click", function(){
    playRound("Paper", getComputerChoice());
})
scissors.addEventListener("click", function(){
    playRound("Scissors", getComputerChoice());
})

