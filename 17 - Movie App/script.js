// Integração com TMDB API

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector(".movies-wrapper");
const searchButton = document.querySelector("header input");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-container");

    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt ="${title}" class="movie-banner" />

    <h3 class="title">${title}<span class="${
      vote_average >= 8 ? "green" : vote_average >= 5 ? "orange" : "red"
    }">${vote_average}</span></h3>

    <div class="sinopse">
      <h3>Sinopse</h3>
    <p>${overview}</p>`;

    main.appendChild(movieEl);
  });
}

searchButton.addEventListener("keydown", ({ key }) => {
  const searchTerm = searchButton.value;

  if (key === "Enter") {
    if (searchTerm && searchTerm !== "") {
      getMovies(SEARCH_API + searchTerm);

      searchButton.value = "";
    } else {
      window.location.reload();
    }
  }
});
