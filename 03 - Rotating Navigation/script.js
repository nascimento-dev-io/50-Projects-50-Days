const menuRotation = document.querySelector("header");
const article = document.querySelector(".content-wrapper");
const sideNav = document.querySelectorAll(".nav-bar li");

const showNavBar = () => {
  sideNav.forEach((li) => li.classList.toggle("animation-nav"));
};
menuRotation.onclick = function () {
  this.classList.toggle("rotate");
  article.classList.toggle("rotate-right");
  showNavBar();
};
