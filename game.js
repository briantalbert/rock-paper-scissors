let choices = ["rock", "paper", "scissors"]

function playRound() {
    let compIdx = choices.indexOf(getComputerChoice())
    let playerIdx = choices.indexOf(getPlayerChoice())

    if (compIdx == playerIdx) {
        //It's a tie
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("It's a tie!")
    }
    else if ((playerIdx + 1) % 3 == compIdx) {
        //Computer wins
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("Computer wins!")
    }

    else {
        //Player wins
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("Player wins!")
    }

}

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = ""
    while (!choices.includes(playerChoice)) {
        playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors.")
        playerChoice = playerChoice.toLowerCase()
    }

    return playerChoice;
}

//console.log(getPlayerChoice())



playRound()