//store result for player 1 and player 2 with random number
let player1 = 1
let player2 = 1

//roll the dice
function rollDicePlayer1() {
    player1 = (Math.floor(Math.random()* 6))+1
    document.querySelector(".img1").setAttribute("src",`dice_game_images/dice${player1}.png`)
}
function rollDicePlayer2() {
    player2 = (Math.floor(Math.random()* 6))+1
    document.querySelector(".img2").setAttribute("src",`dice_game_images/dice${player2}.png`)
}
//modify the dice image with the random number scores
document.querySelector('.button1').addEventListener("click", rollDicePlayer1)
document.querySelector('.button2').addEventListener("click", rollDicePlayer2)

//modify header to display a winner
if (player1 > player2) {
    document.querySelector('h1').innerHTML = "Player 1 wins! 🚩"
} else if (player2 > player1) {
    document.querySelector('h1').innerHTML = "Player 2 wins! 🚩"
} else {
    document.querySelector('h1').innerHTML = "Draw!"
}