let choices = ["Rock", "Paper", "Scissors"]
let scoresArray = [0, 0, 0]

//initializing scoreboard
const scores = document.querySelectorAll(".score")
scores.forEach(score => score.textContent = 0)
document.querySelector(".winner").textContent = "Press a button above to play!"

const choiceButtons = document.querySelectorAll(".choice")
choiceButtons.forEach(choice => choice.addEventListener('click', sendChoice => {
    let pick = choice.id.charAt(0).toUpperCase() + choice.id.slice(1)
    playRound(pick)
} ))

function playRound(choice) {
    let compIdx = choices.indexOf(getComputerChoice())
    let playerIdx = choices.indexOf(choice)
    document.querySelector(".round").textContent = `${choices[playerIdx]} vs ${choices[compIdx]}`

    if (compIdx == playerIdx) {
        //It's a tie
        document.querySelector(".winner").textContent = "It's a Tie!"
        scoresArray[2] += 1
        document.querySelector(".scoreboard .draw .score").textContent = scoresArray[2]
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("It's a tie!")
    }
    else if ((playerIdx + 1) % 3 == compIdx) {
        //Computer wins
        document.querySelector(".winner").textContent = "Computer wins!"
        scoresArray[1] += 1
        document.querySelector(".scoreboard .computer .score").textContent = scoresArray[1]
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("Computer wins!")
    }

    else {
        //Player wins
        document.querySelector(".winner").textContent = "You win!"
        scoresArray[0] += 1
        document.querySelector(".scoreboard .player .score").textContent =scoresArray[0]
        console.log('Computer choice: ' +  choices[compIdx])
        console.log('Player choice: ' + choices[playerIdx])
        console.log("Player wins!")
    }

}

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// function getPlayerChoice() {
//     let playerChoice = ""
//     while (!choices.includes(playerChoice)) {
//         playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors.")
//         playerChoice = playerChoice.toLowerCase()
//     }

//     return playerChoice;
// }

