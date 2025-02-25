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

//Smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e){
  section1.scrollIntoView({behavior: 'smooth'});
});

//////////////////////////////////
/*
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

//style (inline style)
message.style.backgroundColor = '#34383d'
message.style.width = '120%'

//reading in line style
console.log(message.style.backgroundColor)
//reading style from other value eg. from default or from style.css class
console.log(getComputedStyle(message).height)//43.6667px
//update more height
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'

//Change prebuilt primary color property from the root (document) to orange
document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attribute
//log attribute of logo img
const logo = document.querySelector('.nav__logo')
console.log(logo.alt) //Bankist logo
console.log(logo.src) //http://127.0.0.1:5500/bankist/img/logo.png
console.log(logo.getAttribute('src')) //img/logo.png
console.log(logo.className)//nav__logo

//add attribute
logo.setAttribute('company', 'Bankist')//<img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo" company="Bankist">

//changing link
const link = document.querySelector('.nav__link--btn')
console.log(link.href)//http://127.0.0.1:5500/bankist/index.html#
console.log(link.getAttribute('href'))//#

//Data type 
// with the attribute that starts with the word data
//<img src="img/logo.png" class="nav__logo" data-set-version-number="3.0"/>
console.log(logo.dataset.setVersionNumber)//3.0

//Classes
logo.classList.add('a','b')
logo.classList.remove('a','b')
logo.classList.toggle('a')
logo.classList.contains('a')

/////////////////////
//Smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(e){
  //scroll mannually
  // const s1coords = section1.getBoundingClientRect()
  // console.log(s1coords) //returns position left right top..{"x": -1.3333333730697632,"y": 812.9896240234375,"width": 780,"height": 1861.3646240234375,"top": 812.9896240234375,"right": 778.6666666269302,"bottom": 2674.354248046875,"left": -1.3333333730697632}
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  //scroll with scrollIntoView
  section1.scrollIntoView({behavior: 'smooth'})
})

/////////////////////////////
//Type of Events and Even Listener
//1. use addEventListener
const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function(e){
//   alert('mouseenter')
// })
//2. use the on event property
// h1.onmouseenter = function(e){
//      alert('mouseenter')
// }

//remove eventlistener function 
//1.  pop up the alert once.
// const h1alert = function(){
//   alert('mouseenter over h1')
//   h1.removeEventListener('mouseenter', h1alert)
// }
// h1.addEventListener('mouseenter', h1alert)

//2. remove alert after 5secs
const h1alert = function(){
    alert('mouseenter over h1')
  }
  h1.addEventListener('mouseenter', h1alert)
  setTimeout(()=> 
    h1.removeEventListener('mouseenter', h1alert), 5000)


  //////////////////////
  //generate random number
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1))
  //generate random color for rgb : rgb(255, 255, 255)
  const randomColor = () => (`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`)
  console.log(randomColor())//rgb(238, 237, 48)
  document.querySelector('h1').addEventListener(('click'), function(e){
    this.style.backgroundColor = randomColor()
    console.log(this)
    console.log(e.currentTarget) //this === e.currentTarget ===  h1 element
  })
 */
