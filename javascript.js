let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer =computerChoice.toLowerCase();
    console.log(human);
    console.log(computerChoice);

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
    console.log(humanScore);
    console.log(computerScore);
    }

function getComputerChoice(){
    let max = Math.floor(Math.random() * 3);
    return max === 0 ? "Rock"
    : max === 1 ? "Paper"
    : "Scissors";
};

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function(){
    playRound("Rock", getComputerChoice());
});
paper.addEventListener("click", function(){
    playRound("Paper", getComputerChoice());
})
scissors.addEventListener("click", function(){
    playRound("Scissors", getComputerChoice());
})

