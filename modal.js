'use strict'

const openBtn = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')
console.log(openBtn) //array of 3 btns

for (let i = 0; i < openBtn.length; i++){
    openBtn[i].addEventListener('click', function(){
        //console.log('open')
        //modal.style.display = 'block'
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

closeBtn.addEventListener('click', function(){
    //console.log('close')
    //modal.style.display = 'none'
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})