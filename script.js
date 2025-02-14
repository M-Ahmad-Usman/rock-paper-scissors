function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) return "rock";

    else if (choice == 1) return "paper";

    else return "scissors";
}

const numOfRounds = 5;

let humanScore = 0;
let computerScore = 0;
let iterations = 0;

let displayHumanScore = document.querySelector("#human-score").firstElementChild;
let displayComputerScore = document.querySelector("#computer-score").firstElementChild;
const tie = document.querySelector("#tie");
const displayResult = document.querySelector("#result");

function decideWinner() {

    if (humanScore > computerScore) displayResult.textContent = "You won the game!";

    else if (computerScore > humanScore) displayResult.textContent = "You lose the game";
}

function cleanup() {

    displayHumanScore.textContent = "";
    displayComputerScore.textContent = "";
    displayResult.textContent = "";
    tie.style.display = "none";

    iterations = 0;
    humanScore = 0;
    computerScore = 0;
}


function playRound(humanChoice, computerChoice) {

    if (iterations == numOfRounds) cleanup(); 

    tie.style.display = "none";

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        iterations++;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        iterations++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        iterations++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        iterations++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        iterations++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++
        iterations++;
    }
    else {
        tie.style.display = "block"
    }

    if (iterations == numOfRounds) decideWinner();
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        
        let computerChoice = getComputerChoice();
        playRound(button.textContent, computerChoice);
        
        displayHumanScore.textContent = humanScore;
        displayComputerScore.textContent = computerScore;   
    });
})