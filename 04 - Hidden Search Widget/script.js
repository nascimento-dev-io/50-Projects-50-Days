const buttonSearch = document.querySelector("button");
const inputSearch = document.querySelector("input");

buttonSearch.addEventListener("click", () => {
  inputSearch.classList.toggle("showInput");
  inputSearch.focus();
});
