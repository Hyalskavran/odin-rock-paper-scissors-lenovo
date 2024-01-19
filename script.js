// Array of all possible options in the Rock Paper Scissors game
const gameChoices = ["rock", "paper", "scissors"]

// Array of possible replies ( only endings )
const Replies = [
    " Rock beats scissors!",
    " Paper beats rock!",
    " Scissors beats paper!"
]

let roundResult = (winner, choice) => {
    // Determine the reply beginning by who won
    if (winner == "player") {
        replyStart = "You won!"
    } else {
        replyStart = "You lost!"
    }

    // Determine the reply ending by the hand played
    if (choice == "rock") {
        return `${replyStart}${Replies[0]}`
    } else if (choice == "paper") {
        return `${replyStart}${Replies[1]}`
    } else {
        return `${replyStart}${Replies[2]}`
    }
}

let getComputerChoice = () => {
    // Choose a random element from gameChoices array
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

let getPlayerChoice = () => {
    // Ask a player to choose rock, paper or scissors
    let userInput = prompt("Please choose 'Rock', 'Paper' or 'Scissors' and see if you win!")

    return userInput.toLowerCase()
}

let playRound = (playerSelection, computerSelection) => {
    let p1 = playerSelection()
    let p2 = computerSelection()

    if (p1 == p2) {
        return `Your choice: ${p1}\nComputer choice: ${p2}\nIt's a tie!`
    }
    else if ((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "scissors" && p2 == "paper")) {
        return `Your choice: ${p1}\nComputer choice: ${p2}\n${roundResult("player", p1)}`
    } else {
        return `Your choice: ${p1}\nComputer choice: ${p2}\n${roundResult("computer", p2)}`
    }
}

// console.log(getComputerChoice())
// console.log(roundResult("computer", "rock"))
// console.log(getPlayerChoice())
console.log(playRound(getPlayerChoice, getComputerChoice))