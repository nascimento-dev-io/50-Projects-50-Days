// const hovers = document.querySelectorAll(".hover");

// hovers.forEach((hover) => {
//   hover.addEventListener("mouseover", highligth);
// });

const hoverboard = document.querySelector(".hoverboard");

for (let i = 0; i < 405; i++) {
  const div = document.createElement("div");
  div.classList.add("hover");
  div.addEventListener("mouseover", highligth);

  hoverboard.appendChild(div);
}

function highligth({ target }) {
  const color = newBackgroundColor();
  target.style.backgroundColor = color;
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

  setTimeout(() => {
    target.style.backgroundColor = "#1d1d1d";
    target.style.boxShadow = "0 0 2px #000";
  }, 800);
}

function newBackgroundColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
