const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";

// const row = 3;

function setImageRandom(params) {
  for (let i = 0; i < 30; i++) {
    const img = document.createElement("img");
    img.src = getImageRandom();

    container.appendChild(img);
  }
}

function getImageRandom() {
  return `https://source.unsplash.com/random/${Math.ceil(
    Math.random() * 50 + 300
  )}x${Math.ceil(Math.random() * 50 + 300)}`;
}
setImageRandom();
