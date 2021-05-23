const btnClose = document.querySelector(".btn-close");
const navMenu = document.querySelector(".menu ul");

btnClose.addEventListener("click", () => {
  navMenu.classList.toggle("toggle-menu");
});
