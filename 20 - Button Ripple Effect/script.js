function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");

  const diameter = Math.max(button.clientWidth, button.clientHeight); // largura e altura do botão
  const radius = diameter / 2; // metade do botão

  circle.style.width = circle.style.height = `${diameter}px`; // circulo do tamanho do diamentro do botão
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`; // inserindo o span baseado no click do mouse
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");

  const ripple = button.querySelector("ripple");

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

document.querySelector("button").addEventListener("click", createRipple);
