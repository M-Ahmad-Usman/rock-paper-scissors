function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0)
        return "rock";

    else if (choice == 1)
        return "paper";

    else
        return "scissors"
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    choice = choice.toLowerCase();

    while (true) {
        switch (choice) {
            case "rock":
                return "rock";

            case "paper":
                return "paper";

            case "scissor":
            case "scissors":
                return "scissors";

            default:
                choice = prompt("Invalid choice. Please enter again");
        }
    }
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You won! rock beats scissors");
            humanScore++;
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! paper beats rock");
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You won! paper beats rock");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! scissor beats paper");
            computerScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You won! scissor beats paper");
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! rock beats scissors");
            computerScore++
        }
        else {
            console.log("Tie");
        }
    }

    for (let i = 0; i < 5; i++) {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore)
        console.log("You won the game");
    else if (computerScore > humanScore)
        console.log("You lose the game");
    else
        console.log("Nobody won. Match tied");
}

playGame();
