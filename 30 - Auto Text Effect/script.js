const text = document.querySelector("p");
const speed = document.querySelector("#speed");

const textAuto = "We Love Programming!".split("");

let speedValue = 1;

speed.oninput = ({ target }) => {
  speedValue = target.value;
};

function autoText() {
  textAuto.forEach((letter, indice) => {
    setTimeout(() => {
      text.textContent += letter;

      if (letter == "!") {
        text.textContent = "";
        autoText();
      }
    }, indice * (300 / speedValue));
  });
}

autoText(speedValue);

// opcional original com controle melhor da velocidade

// const textEl = document.querySelector("p");
// const speedEl = document.getElementById("speed");
// const text = "We Love Programming!";
// let idx = 1;
// let speed = 300 / speedEl.value;

// writeText();

// function writeText() {
//   textEl.innerText = text.slice(0, idx);

//   idx++;

//   if (idx > text.length) {
//     idx = 1;
//   }

//   setTimeout(writeText, speed);
// }

// speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
