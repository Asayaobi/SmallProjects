function randomNumber() {
    let result = (Math.floor(Math.random()* 6))+1
    return result
}
document.querySelector(".img1").setAttribute("src",`dice_game_images/dice${randomNumber()}.png`)
document.querySelector(".img2").setAttribute("src",`dice_game_images/dice${randomNumber()}.png`)