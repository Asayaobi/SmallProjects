'use strict'

const openBtn = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')
console.log(openBtn) //array of 3 btns

const openModal = () => {
    //modal.style.display = 'block'
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < openBtn.length; i++){
    openBtn[i].addEventListener('click', openModal)
}

const closeModal = () => {
    //modal.style.display = 'none'
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
//when we click on the background (overlay) of the modal or on the x button, the modal box should close.
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)