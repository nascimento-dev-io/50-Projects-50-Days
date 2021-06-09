const containerCards = document.querySelector(".poke-container");
const searchInput = document.querySelector(".search input");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const pokemonsList = [];

getInitalsPokemons();

function getInitalsPokemons() {
  for (let i = 1; i < 381; i++) {
    fetch(baseURL + i)
      .then((data) => data.json())
      .then((pokemon) => {
        pokemonsList.push(pokemon.name);
        getPokemons(pokemon.name);
      });
  }
}

const typesPokemonColors = {
  fire: "#FDDFDF",
  dark: "#9e9e9e",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  ice: "#9dc7e2",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

function getPokemons(pokemon) {
  fetch(baseURL + pokemon.toLocaleLowerCase())
    .then((data) => data.json())
    .then(createCard)
    .catch((err) => console.log(err));
}

function createCard(pokemon) {
  const image = pokemon.sprites.other.dream_world.front_default;
  const type = pokemon.types[0].type.name;
  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = typesPokemonColors[type];

  card.innerHTML = `
      <div class="image">
      <img
        src=${image}
        alt=${name}
      />
      </div>
      <span class="number">#${id}</span>
      <span class="name">${name}</span>
      <span class="type">Type: ${type}</span>
  `;

  containerCards.appendChild(card);
}

// filtrando os pokemons
searchInput.addEventListener("input", handleInput);
searchInput.focus();

function handleInput({ target }) {
  const inputValue = target.value.toLowerCase();
  const regex = new RegExp(`^${inputValue}`);
  let pokemonMatch = [];

  if (inputValue) {
    pokemonMatch = pokemonsList.filter((name) =>
      name.toLowerCase().match(regex)
    );
    getFilteredPokemon(pokemonMatch);
  } else {
    window.location.reload();
    searchInput.focus();
  }
}

function getFilteredPokemon(pokemonMatch) {
  clearCards(containerCards);

  pokemonMatch.forEach((pokemon) => {
    const pokemonName = pokemon.toLowerCase();
    getPokemons(pokemonName);
  });
}

function clearCards(cards) {
  cards.innerHTML = "";
}
