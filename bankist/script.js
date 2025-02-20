'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*
add addEventListener to the green buttons that will show modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
*/
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
//Lecture

//Selecting DOM Elements
//get everything from the page console.log(document.documentElement)
//get header console.log(document.head)
//get body console.log(document.body)

//querySelector
const header = document.querySelector('.header')
//console.log(document.querySelectorAll('.section')) -> return NodeList[]

//console.log(document.getElementById('section--1'))
//get all elements that contain the word btn console.log(document.getElementsByTagName('btn')) -> return live HTMLCollection whitch can update itself if btn element changes
//console.log(document.getElementsByClassName('btn'))-> return live HTMLCollection 

//Creating and inserting element
//.insertAdjacentHTML

//creating a div 
const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookies to improve our funtionality and analytics'
message.innerHTML = 'We use cookies to improve our funtionality and analytics <button class="btn btn--close--cookie">Allow</button>'
//add that div as the first child of header
//header.prepend(message)
//header.before(message)

//add that div as the last child of header
//header.append(message)
header.after(message)

//Note message can only appear once because it's a live element, if you want to siplay it in both places, you have to clone it
//header.append(message.cloneNode(true))

//Delete Element
//when we click Allow button, remove the message
document.querySelector('.btn--close--cookie').addEventListener('click', function(){
    message.remove()
})