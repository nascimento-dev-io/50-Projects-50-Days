const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const decrement = document.querySelector(".decrement");
const increment = document.querySelector(".increment");

let lineWidth = document.querySelector(".number-thickness");

let mouseTop = undefined,
  mouseLeft = undefined,
  widthValue = 5,
  isPressed = false;

decrement.addEventListener("click", () => {
  widthValue--;
  setLineWidth(widthValue);
});

increment.addEventListener("click", () => {
  widthValue++;
  setLineWidth(widthValue);
});

function setLineWidth(width) {
  if (width < 1) widthValue = 1;
  else if (width > 50) widthValue = 50;

  lineWidth.value = width;
}

// lidando com o evento de pressionar o botão do mouse, habilitando a flag para controlar o envento mousemove
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  (mouseTop = e.offsetY), (mouseLeft = e.offsetX);
});

// atualizando coordenadas e criando circulos e linhas ao mexer no mouse
canvas.onmousemove = (e) => {
  const styleColor = document.querySelector(".color-paint").value;
  if (isPressed) {
    const mouseTop2 = e.offsetY;
    const mouseLeft2 = e.offsetX;

    drawCircle(mouseLeft, mouseTop, styleColor);
    drawLine(mouseLeft, mouseTop, mouseLeft2, mouseTop2, styleColor);

    mouseLeft = mouseLeft2;
    mouseTop = mouseTop2;
  }
};

function drawCircle(x, y, fillStyle) {
  const radius = lineWidth.value;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fillStyle;
  ctx.fill();

  console.log(`x - ${x} | y - ${y} | Raio - ${radius}`);
}

function drawLine(x1, y1, x2, y2, lineColor) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = lineWidth.value;
  ctx.strokeStyle = lineColor;
  ctx.stroke();
}

// desabilitando a flag ao soltar o botão do mouse e resetando as variaveis
canvas.onmouseup = () => {
  isPressed = false;

  mouseTop = undefined;
  mouseLeft = undefined;
};

const buttonClean = document.querySelector(".clear");
buttonClean.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
