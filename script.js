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

    while (true) {
        switch (choice) {
            case "rock":
            case "Rock":
                return "rock";

            case "paper":
            case "Paper":
                return "paper";

            case "scissor":
            case "Scissor":
            case "scissors":
            case "Scissors":
                return "scissors";

            default:
                choice = prompt("Invalid choice. Please enter again");
        }
    }
}