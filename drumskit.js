
function handleClick() {
    var audio = new Audio('drumskit_sound/tom-1.mp3')
    audio.play()
}

// document.querySelector('.set').addEventListener("click",handleClick)
let length = document.getElementsByClassName("drum").length
console.log(length)

for (let i = 0; i < length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click",handleClick)
}