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
const displayResult = document.querySelector("#result");

function decideWinner() {

    if (humanScore > computerScore) displayResult.textContent = "You won! 🏆";

    else if (computerScore > humanScore) displayResult.textContent = "You lose! 😔";
}

function cleanup() {

    displayHumanScore.textContent = "";
    displayComputerScore.textContent = "";
    displayResult.textContent = "";

    iterations = 0;
    humanScore = 0;
    computerScore = 0;
}

// Updates the score of winner and return true if successful else false.
// Keeps track of the number of rounds played in iterations variable
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        iterations++;
        return true;
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        iterations++;
        return true;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        iterations++;
        return true;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        iterations++;
        return true;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        iterations++;
        return true;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++
        iterations++;
        return true;
    }
    else {
        return false;
    }
}

let userChoice = document.querySelector("#user-choice");
userChoice.addEventListener("click", (event)=>{
    let target = event.target;

    // Cleaning up the values of previously played round
    if (iterations == numOfRounds) cleanup();

    // Keeps executing playRound untill round is completed successfully (not tie)
    // Getting user's choice from id of the parent of currently clicked element
    while (!playRound(target.parentElement.id, getComputerChoice()));

    // Updating scores after playing a round
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;

    // If all rounds are played: deciding the winner
    if (iterations == numOfRounds) decideWinner();
})