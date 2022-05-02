function computerPlay() {
    num = Math.floor(Math.random() * 3)
    if (num == 0) {
        num = 'rock'
    } else if (num == 1) {
        num = 'paper'
    } else {
        num = 'scissors'
    }
    return num
}

let player = 0
let computer = 0

function playRound(playerSelected, computerSelected) {
    if (playerSelected == 'rock' && computerSelected == 'paper') {
        computer += 1
        return resultInfo.textContent = 'You lose! Paper beats Rock'
    } else if (playerSelected == 'rock' && computerSelected == 'scissors') {
        player += 1
        return resultInfo.textContent = 'You win! Rock beats Scissors'
    } else if (playerSelected == 'paper' && computerSelected == 'rock'){
        player += 1
        return  resultInfo.textContent = 'You win! Paper beats Rock'
    } else if (playerSelected == 'paper' && computerSelected == 'scissors'){
        computer += 1
        return  resultInfo.textContent = 'You lose! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'paper'){
        player += 1
        return  resultInfo.textContent = 'You win! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'rock'){
        computer += 1
       return  resultInfo.textContent = 'You lose! Rock beats Scissors'
    } else {
        return  resultInfo.textContent = 'Draw'
    }
}

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const resultInfo = document.getElementById('resultInfo')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')
const winner = document.getElementById('winner')

rock.addEventListener('click', () => handleClick('rock'))
paper.addEventListener('click', () => handleClick('paper'))
scissors.addEventListener('click', () => handleClick('scissors'))

function gameOver(player, computer) {
    if(player == 5) {
        return winner.textContent = 'You Won'
    } else if (computer == 5) {
        return winner.textContent = 'You lost'
    }
}

function handleClick(playerSelected) {
    const computerSelected = computerPlay()
    playRound(playerSelected, computerSelected)

    playerScore.textContent = `Player: ${player}`
    computerScore.textContent = `Computer: ${computer}`
    
    gameOver(player, computer)
}