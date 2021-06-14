const checkButton = document.querySelector("#burguer")
const menu = document.querySelector(".navigation")
const closeButton = document.querySelector(".close")

checkButton.addEventListener('change', () => {
  menu.classList.add('animation-right')
})

closeButton.addEventListener('click',  () => menu.classList.remove('animation-right'))