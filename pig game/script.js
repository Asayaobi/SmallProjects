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

const addPlayerActive = player => {
    document.querySelector(`.player--${player}`).classList.add('player--active')
    console.log(`add player ${player}`)
}

const removePlayerActive = player => {
    document.querySelector(`.player--${player}`).classList.remove('player--active')
    console.log(`remove player ${player}`)
}

const resetCurrentScore = player => {
    currentScore = 0
    document.querySelector(`#current--${player}`).textContent = currentScore
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
            // document.querySelector(`.player--${player}`).classList.remove('player--active')
            // currentScore = 0
            // document.querySelector(`#current--${player}`).textContent = currentScore
            resetCurrentScore(player)
            removePlayerActive(player)
            player === 0 ? player = 1 : player = 0
            // document.querySelector(`.player--${player}`).classList.add('player--active')
            addPlayerActive(player)
        }
    }
})

//when hold btn is pressed
document.querySelector('.btn--hold').addEventListener('click', function(){
    if (total0 < 100 && total1 < 100){
        if (player === 0){
            total0 += currentScore
            document.querySelector(`#score--${player}`).textContent = total0
            // currentScore = 0
            // document.querySelector(`#current--${player}`).textContent = currentScore
            resetCurrentScore(player)

            if (total0 >= 100) {
                document.querySelector('.player--0').classList.add('player--winner')
            } else {
                removePlayerActive(player)
                player === 0 ? player = 1 : player = 0
                addPlayerActive(player)
            }
            
        } else {
            total1 += currentScore
            document.querySelector(`#score--${player}`).textContent = total1
            // currentScore = 0
            // document.querySelector(`#current--${player}`).textContent = currentScore
            resetCurrentScore(player)

            if (total1 >= 100){
                document.querySelector('.player--1').classList.add('player--winner')
            } else {
                removePlayerActive(player)
                player === 0 ? player = 1 : player = 0
                addPlayerActive(player)
            }
        }
    } 
})

//when reset is pressed
document.querySelector('.btn--new').addEventListener('click', function(){
    document.querySelector(`.player--${player}`).classList.remove('player--winner')
    // document.querySelector(`.player--${player}`).classList.remove('player--active')
    removePlayerActive(player)
    resetCurrentScore(player)

    player = 0
    // currentScore = 0
    total0 = 0
    total1 = 0
    // document.querySelector(`.player--${player}`).classList.add('player--active')
    addPlayerActive(player)
    // let currentScores = document.querySelectorAll('.current-score')
    // for (i = 0; i < currentScores.length; i++){
    //     currentScores[i].textContent = 0
    // }

    let scores = document.querySelectorAll('.score')
    for (i = 0; i < scores.length; i++){
        scores[i].textContent = 0
    }
})