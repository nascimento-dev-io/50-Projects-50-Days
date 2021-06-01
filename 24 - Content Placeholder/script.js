const cardImage = document.querySelector(".card-image");
const title = document.querySelector(".card-content h2");
const description = document.querySelector(".card-content p");
const perfilImage = document.querySelector(".perfil-photo");
const name = document.querySelector(".perfil-name");
const date = document.querySelector(".date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  cardImage.innerHTML =
    '<img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  perfilImage.innerHTML = '<img src="./.github/perfil.jpg"  />';
  name.innerHTML = "Jorge Nacimento";
  date.innerHTML = "May, 31, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
