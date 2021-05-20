const jokeView = document.querySelector(".jokes-wrapper p");
const buttonGetJoke = document.querySelector("button");

const baseURL = "https://icanhazdadjoke.com/";
const options = {
  mode: "cors",
  headers: {
    Accept: "text/plain",
  },
};

const getJoke = () => {
  fetch(baseURL, options)
    .then((jokeData) => jokeData.text())
    .then((joke) => (jokeView.textContent = joke))
    .catch(
      (err) => (jokeView.textContent = `Couldn't show joke, try again ${err}`)
    );
};

buttonGetJoke.addEventListener("click", getJoke);

getJoke();
