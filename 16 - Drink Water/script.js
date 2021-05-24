const glasses = Array.from(document.querySelectorAll(".glass-water"));
const remaining = document.querySelector(".remains");
const containerWaterFilled = document.querySelector(".fill");

let heightWater = "";
let heightEmpty = "";

glasses.forEach((glass) => {
  glass.addEventListener("click", highligth);
});

function highligth({ target }) {
  target.classList.toggle("full");

  waterFilled();
}

function waterFilled() {
  const waterDrunk = glasses.filter((drunk) =>
    drunk.classList.contains("full")
  );

  let percWater = waterDrunk.length * 12.5; // percentagem cheio
  let valueRemaining = (2000 - (percWater * 2000) / 100) / 1000; // litros restante

  updateContainerCup(percWater, valueRemaining);
}

function updateContainerCup(water, empty) {
  heightWater = containerWaterFilled.style.height;
  heightEmpty = remaining.style.height;

  //
  containerWaterFilled.style.height = `${water}%`;
  containerWaterFilled.textContent = `${water}%`;

  //

  remaining.innerHTML = ` <strong>${empty}L </strong><br> Remained`;
  remaining.style.height = `${100 - water}% `;
}
