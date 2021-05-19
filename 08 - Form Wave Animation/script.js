const labels = document.querySelectorAll(".container-input label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, indice) =>
        `<span style = "transition-delay: ${indice * 50}ms">${letter}</span>`
    )
    .join("");
});
