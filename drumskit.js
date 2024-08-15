//function to make sound
function makeSound(key) {
    switch (key) {
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

        default: console.log(key)
            break;
    }
}

//function to create animation
function buttonAnimation(currentKey){
    //add class press for animation to the button
    let currentButton = document.querySelector(`.${currentKey}`)
    currentButton.classList.add("press")
    //remove class press for animation after 100 miliseconds
    setTimeout(function() { 
        currentButton.classList.remove("press")
    }, 100)
}

// handle click buttons
let length = document.getElementsByClassName("drum").length

for (let i = 0; i < length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click",function() {
        let buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML) 
        buttonAnimation(buttonInnerHTML)
    })
}

//handle keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

