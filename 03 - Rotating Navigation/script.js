const header = document.querySelector("header");
const main = document.querySelector(".content-wrapper");
const lis = document.querySelectorAll(".nav-bar li");

const showNav = () => {
  lis.forEach((li) => li.classList.toggle("animation-nav"));
};
header.onclick = function () {
  this.classList.toggle("rotate");
  main.classList.toggle("rotate-right");
  showNav();
};
