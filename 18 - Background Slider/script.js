const buttonLeft = document.querySelector("[data-left]");
const buttonRight = document.querySelector("[data-right]");

const containerBg = document.querySelectorAll("[data-bg]");

let count = 1;
const maxImages = 6;

function showBackground() {
  if (count > maxImages) count = 1;
  else if (count < 1) count = maxImages;

  containerBg.forEach((element) => {
    element.style.backgroundImage = `url('./images/natureza${count}.jpg')`;
  });
}

buttonLeft.addEventListener("click", () => {
  showBackground();
  count--;
});

buttonRight.addEventListener("click", () => {
  showBackground();
  count++;
});
