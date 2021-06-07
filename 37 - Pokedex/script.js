const containerCards = document.querySelector(".poke-container");
const searchInput = document.querySelector(".search input");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonsList = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidorina",
  "Nidoqueen",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetchd",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr-mime",
  "Nidoran-m",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
];

getPokemons(baseURL);

const typesColor = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

function getPokemons(url) {
  pokemonsList.forEach((pokemon) => {
    fetch(baseURL + pokemon.toLocaleLowerCase())
      .then((data) => data.json())
      .then(createCard)
      .catch((err) => console.log(err));
  });
}

function createCard(pokemon) {
  const image = pokemon.sprites.other.dream_world.front_default;
  const type = pokemon.types[0].type.name;
  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = typesColor[type];

  card.innerHTML = `
      <div class="image">
      <img
        src=${image}
        alt=""
      />
      </div>
      <span class="number">#${id}</span>
      <span class="name">${name}</span>
      <span class="type">Type: ${type}</span>
  `;

  containerCards.appendChild(card);
}

// filtrando os pokemons
searchInput.addEventListener("input", getFilteredPokemon);
searchInput.focus();

function getFilteredPokemon({ target }) {
  const inputValue = target.value.toLowerCase();

  const regex = new RegExp(`^${inputValue}`);

  const pokemonMatch = pokemonsList.filter((name) =>
    name.toLowerCase().match(regex)
  );

  if (inputValue && pokemonMatch.length !== 0) {
    containerCards.classList.remove("error");
    containerCards.innerHTML = "";

    console.log(pokemonMatch.length);

    pokemonMatch.forEach((pokemon) => {
      const pokemonName = pokemon.toLowerCase();

      fetch(baseURL + pokemonName)
        .then((data) => data.json())
        .then(createCard)
        .catch(console.log);
    });
  } else if (inputValue && pokemonMatch.length === 0) {
    containerCards.classList.add("error");
    containerCards.innerHTML = `${inputValue} Not Found`;
  } else {
    window.location.reload();
    searchInput.focus();
  }
}
