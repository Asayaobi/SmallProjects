
function handleClick() {
    let buttonInnerHTML = this.innerHTML
    switch (buttonInnerHTML) {
        case "w":
            let crash = new Audio('drumskit_sound/crash.mp3')
            crash.play()
            break;

        case "a":
            let tom2 = new Audio('drumskit_sound/tom-2.mp3')
            tom2.play()
            break;

        case "s":
            let tom1 = new Audio('drumskit_sound/tom-1.mp3')
            tom1.play()
            break;

        case "d":
            let snare = new Audio('drumskit_sound/snare.mp3')
            snare.play()
            break;

        case "j":
            let tom3 = new Audio('drumskit_sound/tom-3.mp3')
            tom3.play()
            break;

        case "k":
            let tom4 = new Audio('drumskit_sound/tom-4.mp3')
            tom4.play()
            break;

        case "l":
            let kick = new Audio('drumskit_sound/kick-bass.mp3')
            kick.play()
            break;
            
        default: console.log(buttonInnerHTML)
            break;
    }
}

// document.querySelector('.set').addEventListener("click",handleClick)
let length = document.getElementsByClassName("drum").length
console.log(length)

for (let i = 0; i < length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click",handleClick)
}