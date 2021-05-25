const search = document.querySelector(".search");
const containerMovies = document.querySelector(".movies-wrapper");
const movies = Array.from(containerMovies.children);

let filterName = "";

search.addEventListener("keyup", () => {
  const filterName = search.value.trim();

  movies.forEach((el) => {
    movieName = el.getAttribute("id");

    if (movieName) {
      movieName.match(filterName)
        ? containerMovies.appendChild(el)
        : el.remove();
    }
  });

  // console.log(el.getAttribute("id"));
});
