const toggleTheme = document.querySelector("button");
const root = document.querySelector("html");

toggleTheme.addEventListener("click", () => {
  root.classList.toggle("dark-mode");

  let buttonName = toggleTheme.textContent.trim();

  buttonName == "Dark mode"
    ? (toggleTheme.textContent = "Light mode")
    : (toggleTheme.textContent = "Dark mode");
});

// gerenciando o relógio

const secondsPointer = document.querySelector(".seconds");
const minutesPointer = document.querySelector(".minutes");
const hoursPointer = document.querySelector(".hours");

const digitalClock = document.querySelector(".digital-clock");
const infoDate = document.querySelector(".info-date");

let degValueSeconds = 6, // 6deg - 360deg dividido por 60 segundos
  degValueMinutes = 6, // 6deg - 360deg dividido por 60 minutos
  degValueHours = 30; // 30deg - utilizado para calcular angulo do ponteiro de horas

const currentDate = new Date();

window.onload = () => {
  const daysWeak = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  infoDate.innerHTML = `${daysWeak[currentDate.getDay()]}, ${
    monthsYear[currentDate.getMonth()]
  } <span> ${currentDate.getDate()} </span>`;

  degValueSeconds *= currentDate.getSeconds();
  degValueMinutes *= currentDate.getMinutes();
  degValueHours *= currentDate.getHours() % 12;
  // currentDate.getHours() > 12
  //   ? currentDate.getHours() - 12
  //   : currentDate.getHours();

  updateClock();

  setInterval(() => {
    secondsPointer.style.transform = `rotate(${degValueSeconds}deg)`;

    if (degValueSeconds % 360 == 0) {
      updateClock();
    }

    degValueSeconds += 6;
  }, 1000);
};

function updateClock() {
  hoursPointer.style.transform = `rotate(${degValueHours}deg)`;
  minutesPointer.style.transform = `rotate(${degValueMinutes}deg)`;

  digitalClock.innerHTML = ` ${currentDate.getHours()}:${currentDate.getMinutes()}${
    currentDate.getHours() > 12 ? "PM" : "AM"
  }`;

  degValueMinutes += 6;
  degValueHours += 0.6;
}
