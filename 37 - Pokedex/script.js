const containerCards = document.querySelector(".poke-container");
const searchInput = document.querySelector(".search input");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

let currentCards = [],
  currentIndex = 1,
  lastIndex = 13;

getPokemonsNames();

window.addEventListener("scroll", scrolledResquest);

// Manipulando o event scroll para carregar mais pokemons
function scrolledResquest() {
  let heigthTop = Math.floor(+containerCards.getBoundingClientRect().bottom);

  if (lastIndex > 640) {
    document.onmousedown = () => {
      if (event.button === 1) return false;
    };
    return;
  } else if (heigthTop < 2000) {
    console.log(currentIndex);

    currentIndex = lastIndex;
    lastIndex += 12;
    getPokemonsNames();
  }
}

function getPokemonsNames() {
  for (let i = currentIndex; i < lastIndex; i++) {
    fetch(baseURL + i)
      .then((data) => data.json())
      .then((pokemon) => {
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
  fetch(baseURL + pokemon.toLowerCase())
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
  card.setAttribute("data-pokemon", id);
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

  currentCards.push(card);

  insertCardsPerIndexNumber(currentCards);
}

// inserindo os cards por ordem crescente

function insertCardsPerIndexNumber(currentCards) {
  const growingCards = currentCards.sort((a, b) => {
    return (
      parseInt(a.getAttribute("data-pokemon")) -
      parseInt(b.getAttribute("data-pokemon"))
    );
  });

  growingCards.forEach((card) => containerCards.appendChild(card));
}

// Preenchendo o array com os nomes de pokemons para posterior filtragem

const pokemonsList = new Array();

getListPokemonsNames();

async function getListPokemonsNames() {
  for (let i = 1; i < 466; i++) {
    const data = await fetch(baseURL + i);
    const pokemon = await data.json();
    const name = pokemon.name;
    pokemonsList.push(name);
  }
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

    document.onmousedown = () => {
      if (event.button === 1) return false;
    };
  } else {
    resetPokemons(containerCards);
    getPokemonsNames();
    searchInput.focus();
  }
}

function getFilteredPokemon(pokemonMatch) {
  resetPokemons();

  pokemonMatch.forEach((pokemon) => {
    const pokemonName = pokemon.toLowerCase();
    getPokemons(pokemonName);
  });
}

function resetPokemons() {
  containerCards.innerHTML = "";
  currentIndex = 1;
  lastIndex = 13;
  currentCards = [];
}
