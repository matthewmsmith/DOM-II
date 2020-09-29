// Your code goes here

//Mouseover nav background-color change
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", (e) => {
  e.currentTarget.style.backgroundColor = "gold";
})
//Click nav background-color change
nav.addEventListener("click", (e) => {
  e.preventDefault();
  e.currentTarget.style.backgroundColor = "pink";
   
})

// dblClick change logo text
const logoHeader = document.querySelector('.logo-heading')
logoHeader.addEventListener('dblclick', doubleClicked)
function doubleClicked(event) {
  event.currentTarget.textContent = 'Changed logo text'
}
 // wheel fired
const img = document.querySelector('img')
img.addEventListener('wheel', wheel)
function wheel() {
  const h2 = document.querySelector('h2');
    h2.textContent ='Wheel fired'
    h2.style.backgroundColor ='red'
 
}
    
// mouseup effect
let p = document.querySelector('p')
p.addEventListener('mouseup', function() {
  document.querySelector('img').remove('img')
})

//cycles through a collection and changes color of text
let myCollection = document.getElementsByTagName("p");
let btn = document.querySelector('.btn')
btn.addEventListener('mousedown', function() {
  for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
  }
})
// on load buttons have default
window.addEventListener('load', function() {
  btn.style.backgroundColor = '#f4f4f4'
  btn.style.padding = '20px'
  btn.style.width = '20%'
  btn.style.border = 'solid 1px black'
})

//MouseOver
btn.addEventListener('mouseover', function() {
   btn.textContent = 'MouseOver'
})


//mouseout
img.addEventListener('mouseout', function() {
   img.style.borderBottom = '20px solid black'
})

//mousemove
const footer = document.querySelector('.footer')
footer.addEventListener('mousemove', function(e) {
   e.target.style.color = 'pink'
})