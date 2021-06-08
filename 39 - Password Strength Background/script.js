const passwordInput = document.querySelector("#password");
const blurEffectContainer = document.querySelector(".background-password");

let strength = 10;

passwordInput.addEventListener("input", analyserPassword);

function analyserPassword({ target }) {
  const password = target.value;

  if (
    password.match(/[0-9]+/) &&
    password.match(/[a-z]+/) &&
    password.match(/[A-Z]+/) &&
    password.match(/[@#&%*]+/)
  ) {
    strength = 10 - password.length * 1.5;
  } else if (
    password.match(/[0-9]+/) &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]+/)
  ) {
    strength = 10 - password.length * 0.8;
  } else if (password.match(/[0-9]+/) && password.match(/[a-z]/)) {
    strength = 10 - password.length * 0.5;
  } else if (password.match(/[a-z]/) || password.match(/[0-9]+/)) {
    strength = 10 - password.length * 0.4;
  } else {
    strength = 10;
  }

  blurEffectContainer.style.backdropFilter = `blur(${strength}px)`;
}
