'use strict'

//keep the higest score
let highScore = 0

//score count
let score = 21

// create a number with math random
let answer =  Math.ceil(Math.random()*20)
console.log(answer)

//user click check to start a function

document.querySelector('.check').addEventListener('click', function() {
    //set the guess value from the input
    const guess = Number(document.querySelector('.guess').value)

    //display a score
    score --
    console.log('score:', score)
    console.log('high score', highScore)
    document.querySelector('.score').textContent = score

    //check the answer and set the message - correct, too high, too low

    //if no number got submitted (falsy)
    if (!guess){
        document.querySelector('.message').textContent = 'please guess a number'
    }

    //correct
    else if (guess == answer) {
        document.querySelector('.number').textContent = answer
        document.querySelector('.message').textContent = 'correct answer'
        //set high score
        if (score > highScore) {
            highScore = score
            console.log('high score', highScore)
            document.querySelector('.highscore').textContent = highScore
        }
    } 

    //too high
    else if (guess > answer) {
        document.querySelector('.message').textContent = 'too high'
        //reset input
        document.querySelector('.guess').value = ""
    } 
    //too low
    else {
        document.querySelector('.message').textContent = 'too low'
        //reset input
         document.querySelector('.guess').value = ""
    }
})

//when again is click
document.querySelector('.again').addEventListener('click', function(){
    //reset number
    document.querySelector('.number').textContent = '?'

    //reset score
    score = 21
    document.querySelector('.score').textContent = 20

    //reset input
    document.querySelector('.guess').value = ""

    answer =  Math.ceil(Math.random()*20)
    console.log(answer)
})




