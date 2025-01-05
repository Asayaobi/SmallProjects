'use strict'

//keep the higest score
let highScore = 0

//score count
let score = 20

// create a number with math random
let answer =  Math.ceil(Math.random()*20)
console.log(answer)

//user click check to start a function

document.querySelector('.check').addEventListener('click', function() {
    //set the guess value from the input
    const guess = Number(document.querySelector('.guess').value)

    //check the answer and set the message -no number, correct, too high, too low

    if (!guess){
        document.querySelector('.message').textContent = '🔴 please guess a number'
    } else if (guess === answer) {
        document.querySelector('.number').textContent = answer
        document.querySelector('.message').textContent = '🎉 Correct answer!'
        //set high score
        if (score > highScore) {
            highScore = score
            console.log('high score', highScore)
            document.querySelector('.highscore').textContent = highScore
        }
    } 
    
    //in case the score is less than 0
    else if (score > 1) {
         if (guess > answer) {
            document.querySelector('.message').textContent = '📈 Too high!'
            score--
        } else {
            document.querySelector('.message').textContent = '📉 Too low!'
            score--
        }
    } else {
        document.querySelector('.message').textContent = 'You Lose! 💥'
        score = 0
    }
    
    

    //display a score
    document.querySelector('.score').textContent = score

})

//when again is click
document.querySelector('.again').addEventListener('click', function(){
    //reset number
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'

    //reset score
    score = 20
    document.querySelector('.score').textContent = 20

    //reset input
    document.querySelector('.guess').value = ""

    answer =  Math.ceil(Math.random()*20)
    console.log(answer)
})




