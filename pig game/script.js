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
let total0 = 0
let total1 = 0

const resetCurrentScore = player => {
    currentScore = 0
    document.querySelector(`#current--${player}`).textContent = currentScore
}

const switchPlayer = () => {
    document.querySelector(`.player--${player}`).classList.remove('player--active')
    player === 1 ? player = 0 : player = 1
    document.querySelector(`.player--${player}`).classList.add('player--active')
}

//when roll dice btn is pressed
document.querySelector('.btn--roll').addEventListener('click', function(){
    if (total0 < 100 && total1 < 100){
        number = Math.ceil(Math.random()*6)
        document.querySelector('.dice').setAttribute('src', `dice-${number}.png`)

        if (number > 1){
            currentScore += number
            document.querySelector(`#current--${player}`).textContent = currentScore
        } else {
            // currentScore = 0
            // document.querySelector(`#current--${player}`).textContent = currentScore
            resetCurrentScore(player)
            // document.querySelector(`.player--${player}`).classList.remove('player--active')
            // player === 0 ? player = 1 : player = 0
            // document.querySelector(`.player--${player}`).classList.add('player--active')
            switchPlayer()
        }
    }
})

//when hold btn is pressed
document.querySelector('.btn--hold').addEventListener('click', function(){
    if (total0 < 100 && total1 < 100){
        if (player === 0){
            total0 += currentScore
            document.querySelector(`#score--${player}`).textContent = total0
            resetCurrentScore(player)

            if (total0 >= 100) {
                document.querySelector('.player--0').classList.add('player--winner')
            } else {
                switchPlayer()
            }
            
        } else {
            total1 += currentScore
            document.querySelector(`#score--${player}`).textContent = total1
            resetCurrentScore(player)

            if (total1 >= 100){
                document.querySelector('.player--1').classList.add('player--winner')
            } else {
                switchPlayer()
            }
        }
    } 
})

//when reset is pressed
document.querySelector('.btn--new').addEventListener('click', function(){
    document.querySelector(`.player--${player}`).classList.remove('player--winner')
    document.querySelector(`.player--${player}`).classList.remove('player--active')

    player = 0
    total0 = 0
    total1 = 0
    document.querySelector(`.player--${player}`).classList.add('player--active')

    let scores = document.querySelectorAll('.score')
    for (i = 0; i < scores.length; i++){
        scores[i].textContent = 0
    }
})