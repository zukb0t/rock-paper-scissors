let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer =computerChoice.toLowerCase();

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

rock.addEventListener("click", function(event){
    console.log(getComputerChoice());
});
paper.addEventListener("click", function(event){
    const a = event.target.value = 1;
    getHumanChoice();
})
scissors.addEventListener("click", function(event){
    const a = event.target.value = 1;
    getHumanChoice();
})

function getHumanChoice(){
    let x = rock.value === "1" ? "Rock"
    : paper === "1" ? "Paper"
    : "Scissors";
    console.log(x);
};
