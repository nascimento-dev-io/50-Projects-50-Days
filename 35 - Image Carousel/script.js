const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const imagesLength = images.length * 350;

let interval = setInterval(run, 2000),
  maxLeftValue = -imagesLength,
  currentLeft = 0;

prev.addEventListener("click", () => {
  currentLeft += 350;
  changeImage();

  resetInterval();
});

next.addEventListener("click", () => {
  currentLeft -= 350;

  changeImage();
  resetInterval();
});

function changeImage() {
  if (currentLeft <= maxLeftValue) {
    currentLeft = 0;
  } else if (currentLeft > 0) {
    console.log(maxLeftValue);
    currentLeft = maxLeftValue + 350;
  }

  slides.style.left = currentLeft + "px";
}

function run() {
  currentLeft -= 350;
  changeImage();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
