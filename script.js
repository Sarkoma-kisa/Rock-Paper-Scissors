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
        return 'You lose! Paper beats Rock'
    } else if (playerSelected == 'rock' && computerSelected == 'scissors') {
        player += 1
        return 'You win! Rock beats Scissors'
    } else if (playerSelected == 'paper' && computerSelected == 'rock'){
        player += 1
        return 'You win! Paper beats Rock'
    } else if (playerSelected == 'paper' && computerSelected == 'scissors'){
        computer += 1
        return 'You lose! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'paper'){
        player += 1
        return 'You win! Scissors beats Paper'
    } else if (playerSelected == 'scissors' && computerSelected == 'rock'){
        computer += 1
       return 'You lose! Rock beats Scissors'
    } else {
        return 'Draw'
    }
}

function game () {
    for (i = 0; i < 5; i++) {
        const playerSelected = prompt('Rock, Paper or Scissors?').toLowerCase()
        const computerSelected = computerPlay()

        console.log(playRound(playerSelected, computerSelected)) 
    }
    function winner(player, computer) {
        if (player > computer) {
            return 'Player Wins!'
        } else {
            return 'Computer Wins!'
        }
    }
    console.log(winner(player, computer))
}

game()