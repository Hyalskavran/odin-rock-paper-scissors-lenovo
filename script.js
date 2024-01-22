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
    // Assign and make the choices both for the player and the computer
    let p1 = playerSelection()
    let p2 = computerSelection()

    if (p1 == p2) {
        // Tie = Replay the game
        console.log(`Your choice: ${p1}\nComputer choice: ${p2}\nIt's a tie!`)
        return playRound(playerSelection, computerSelection)
    }
    else if ((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "scissors" && p2 == "paper")) {
        // Check all the winning conditions and reply accordingly
        console.log(`Your choice: ${p1}\nComputer choice: ${p2}\n${roundResult("player", p1)}`)
        return "player"
    } else {
        // When lost, reply accordingly
        console.log(`Your choice: ${p1}\nComputer choice: ${p2}\n${roundResult("computer", p2)}`)
        return "computer"
    }
}

let game = (playerSelection, computerSelection) => {
    // Number of games won by each player
    playerWon = 0
    computerWon = 0
    
    // 5 rounds total
    for (let rounds = 0; rounds < 5; rounds++) {
        if (playRound(playerSelection, computerSelection) == "player") {
            playerWon++
        } else {
            computerWon++
        }
        console.log(`Player: ${playerWon}\nComputer: ${computerWon}\n`)
    }
    if (playerWon > computerWon) {
        console.log(`Congratulations! You have won ${playerWon} vs ${computerWon}!`)
    } else {
        console.log(`Sorry! You have lost ${computerWon} vs ${playerWon}!`)
    }
}

// Get all buttons from the DOM 
const rockBtn = document.querySelector('#rock-btn')
const paperBtn = document.querySelector('#paper-btn')
const scissorsBtn = document.querySelector('#scissors-btn')



// Run the game!
// game(getPlayerChoice, getComputerChoice)