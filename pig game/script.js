/*

when roll dice btn is pressed
-if total score < 100
player 1 start
1. math random dice number -> number
- if number != 1
2. display dice image
3. add that number to current score
- if number = 1
1. switch player
2. reset current score


when hold btn is pressed
-if total score < 100
1. add the current score to --> total score
2. reset current score
3. switch player

-if score >= 100
1. player background -> black

when reset is pressed
1. reset player background 
2. reset total score
3. reset current score
*/

let player = 0
let number
let currentScore = 0
let totalScore0 = 0
let totalScore1 = 0

//when roll dice btn is pressed
document.querySelector('.btn--roll').addEventListener('click', function(){
    if (totalScore0 < 100 && totalScore1 < 100){
        number = Math.ceil(Math.random()*6)
        document.querySelector('.dice').setAttribute('src', `dice-${number}.png`)

        if (number > 1){
            currentScore += number
            document.querySelector(`#current--${player}`).textContent = currentScore
        } else {
            currentScore = 0
            document.querySelector(`#current--${player}`).textContent = currentScore

            player === 0 ? player = 1 : player = 0
        }
    }
})

