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
    let p1 = playerSelection
    let p2 = computerSelection

    if (p1 == p2) {
        // Tie = Replay the game
        result.innerText = `It's a tie! Try again!`
        // return playRound(playerSelection, computerSelection)
    }
    else if ((p1 == "rock" && p2 == "scissors") || (p1 == "paper" && p2 == "rock") || (p1 == "scissors" && p2 == "paper")) {
        // Check all the winning conditions and reply accordingly
        result.innerText = `${roundResult("player", p1)}`
        return "player"
    } else {
        // When lost, reply accordingly
        result.innerText = `${roundResult("computer", p2)}`
        return "computer"
    }
}

let game = (playerSelection, computerSelection) => {
    
    if (playRound(playerSelection, computerSelection) == "player") {
        p1Score++
    } else {
        p2Score++
    }
    playerScore.innerText = `${p1Score}`
    computerScore.innerText = `${p2Score}`

    // if (playerWon > computerWon) {
    //     console.log(`Congratulations! You have won ${playerWon} vs ${computerWon}!`)
    // } else {
    //     console.log(`Sorry! You have lost ${computerWon} vs ${playerWon}!`)
    // }
}

// Get all required elements from the DOM
buttons = document.querySelectorAll('button')
playerHand = document.querySelector('#player-hand')
computerHand = document.querySelector('#computer-hand')
result = document.querySelector('#result')
playerScore = document.querySelector('#player-score')
computerScore = document.querySelector('#computer-score')

// Number of games won by each player
let p1Score = 0
let p2Score = 0

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (p1Score + p2Score < 5) {
            playerHand.innerText = `${button.id}`
            computerHand.innerText = `${getComputerChoice()}`
    
            if (playRound(playerHand.innerText, computerHand.innerText) == "player") {
                p1Score++
            } else {
                p2Score++
            }
    
            playerScore.innerText = p1Score
            computerScore.innerText = p2Score
        } else {
            if (p1Score > p2Score) {
                result.innerText = `Congratulations! You have won ${p1Score} vs ${p2Score}!`
            } else {
                result.innerText = `Sorry! You have lost ${p2Score} vs ${p1Score}!`
            }
        }
    })
});


// Run the game!
// game(getPlayerChoice, getComputerChoice)