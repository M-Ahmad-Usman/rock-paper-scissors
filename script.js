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