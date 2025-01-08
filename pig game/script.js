'use strict'
/*

when roll dice btn is pressed
-if total score < 100 => playing
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

-if score reaches 100 => stop playing
1. player background -> black

when reset is pressed
1. reset player background 
2. reset total score
3. reset current score
4. hidden dice image
*/

let playing, player, currentScore, total0, total1, number

const initGame = () => {
    playing = true //playing will be false once the total score reaches 100
    player = 0
    currentScore = 0
    total0 = 0
    total1 = 0
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--active')
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score--0').textContent = total0
    document.getElementById('score--1').textContent = total1
    document.getElementById('current--0').textContent = currentScore
    document.getElementById('current--1').textContent = currentScore
}

initGame()

const resetCurrentScore = player => {
    currentScore = 0
    document.getElementById(`current--${player}`).textContent = currentScore
}

const switchPlayer = () => {
    player = player === 0 ?  1 : 0
    document.querySelector(`.player--0`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.toggle('player--active')
}

//when roll dice btn is pressed
document.querySelector('.btn--roll').addEventListener('click', function(){
    if (playing){
        //1. Generating random dice roll
        number = Math.ceil(Math.random()*6)
        //2. Display dice
        document.querySelector('.dice').style.display = 'block'
        document.querySelector('.dice').setAttribute('src', `dice-${number}.png`)

        //3. Check for dice number 1
        if (number > 1){
            //3.1 show current score
            currentScore += number
            document.querySelector(`#current--${player}`).textContent = currentScore
        } else {
            //3.2 switch player
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
    if (playing){
        //1. add current score to the total score
        const totalScore = player === 0 ? total0 += currentScore : total1 += currentScore
        document.getElementById(`score--${player}`).textContent = totalScore
        resetCurrentScore(player)
        //2. check winner
        if (totalScore >= 100){
            //2.1 if total score reaches 100 -> styling : winner class / remove dice img
            document.querySelector(`.player--${player}`).classList.remove('player--active')
            document.querySelector(`.player--${player}`).classList.add('player--winner')
            playing = false
            document.querySelector('.dice').style.display = 'none'
        } else {
            //2.2 if not, switch player
            switchPlayer()
        }
    }
})

//when reset is pressed
document.querySelector('.btn--new').addEventListener('click', initGame)

