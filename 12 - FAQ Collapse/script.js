const buttonsToggle = document.querySelectorAll("button");

buttonsToggle.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentNode.classList.toggle("active")
  );
});
