'use strict'

//keep the higest score
let highScore = 0
//score count
let score = 20
// create a number with math random
let answer =  Math.ceil(Math.random()*20)

//set message display
const setMessage = message => {
    document.querySelector('.message').textContent = message
}

//user click check to start a function
document.querySelector('.check').addEventListener('click', function() {
    //set the guess value from the input
    const guess = Number(document.querySelector('.guess').value)
    
    // when the guess has no number
    if (!guess){
        setMessage('🔴 Please guess a number')
    } 
    
    //when the guess is correct
    else if (guess === answer) {
        setMessage('🎉 Correct answer!')
        document.querySelector('.number').textContent = answer
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('body').style.backgroundColor = '#60b347'
        //set high score
        if (score > highScore) {
            highScore = score
            console.log('high score', highScore)
            document.querySelector('.highscore').textContent = highScore
        }
    } 
    //when the guess is wrong
    //in case the score is less than 0
    else if (score > 1) {
        //too high - too low
        setMessage(guess > answer ? "📈 Too high!" : "📉 Too low!")
        score--
    } else {
        setMessage('You Lose! 💥')
        score = 0
    }
    //display a score
    document.querySelector('.score').textContent = score
})

//when again is click
document.querySelector('.again').addEventListener('click', function(){
    //reset score
    score = 20
    //recreate number
    answer =  Math.ceil(Math.random()*20)
    //reset display
    setMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ""
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})




