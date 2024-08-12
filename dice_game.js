//create a function for random number
function randomNumber() {
    let result = (Math.floor(Math.random()* 6))+1
    return result
}

//store result for player 1 and player 2
let player1 = randomNumber()
let player2 = randomNumber()

//modify the dice image with the random number scores
document.querySelector(".img1").setAttribute("src",`dice_game_images/dice${player1}.png`)
document.querySelector(".img2").setAttribute("src",`dice_game_images/dice${player2}.png`)

