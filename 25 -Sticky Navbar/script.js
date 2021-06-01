const stickyMenu = document.querySelector(".sticky-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    stickyMenu.classList.add("sticky-toggle");
  } else {
    stickyMenu.classList.remove("sticky-toggle");
  }
});
