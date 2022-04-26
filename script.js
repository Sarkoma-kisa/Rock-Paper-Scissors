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

computerPlay()

function playRound(playerSelected, computerSelected) {
    if (playerSelected == 'rock' && computerSelected == 'paper') {
        return 'You lose! Paper beats Rock'
    } else if (playerSelected == 'rock' && computerSelected == 'scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelected == 'paper' && computerSelected == 'rock'){
        return 'You win! Paper beats Rock'
    } else if (playerSelected == 'paper' && computerSelected == 'scissors'){
        return 'You lose! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'paper'){
        return 'You win! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'rock'){
       return 'You lose! Rock beats Scissors'
    } else {
        return 'Draw'
    }
}

const playerSelected = 'rock'
const computerSelected = computerPlay()
console.log(playRound(playerSelected, computerSelected))