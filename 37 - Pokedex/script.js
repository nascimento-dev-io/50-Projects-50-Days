const containerCards = document.querySelector(".poke-container");
const searchInput = document.querySelector(".search input");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

// Você pode busca a lista dos nomes via API caso seja necessário
const pokemonsList = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "weedle",
  "butterfree",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "spearow",
  "fearow",
  "pikachu",
  "raichu",
  "nidorina",
  "nidorino",
  "ninetales",
  "zubat",
  "golbat",
  "oddish",
  "gloom",
  "vileplume",
  "parasect",
  "venonat",
  "venomoth",
  "diglett",
  "dugtrio",
  "arcanine",
  "poliwag",
  "poliwhirl",
  "poliwrath",
  "abra",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "tentacruel",
  "graveler",
  "ponyta",
  "rapidash",
  "rattata",
  "raticate",
  "ekans",
  "arbok",
  "sandshrew",
  "sandslash",
  "nidoran-f",
  "nidoqueen",
  "nidoran-m",
  "nidoking",
  "clefable",
  "vulpix",
  "jigglypuff",
  "wigglytuff",
  "paras",
  "meowth",
  "persian",
  "psyduck",
  "golduck",
  "mankey",
  "primeape",
  "growlithe",
  "kadabra",
  "alakazam",
  "machop",
  "machoke",
  "machamp",
  "tentacool",
  "geodude",
  "golem",
  "slowpoke",
  "clefairy",
  "magikarp",
  "ditto",
  "unown",
  "wobbuffet",
  "smeargle",
  "wurmple",
  "magnemite",
  "magneton",
  "doduo",
  "dodrio",
  "seel",
  "dewgong",
  "shellder",
  "cloyster",
  "kingler",
  "voltorb",
  "electrode",
  "exeggutor",
  "hitmonlee",
  "hitmonchan",
  "weezing",
  "horsea",
  "seadra",
  "goldeen",
  "seaking",
  "staryu",
  "starmie",
  "electabuzz",
  "magmar",
  "eevee",
  "vaporeon",
  "jolteon",
  "flareon",
  "porygon",
  "omastar",
  "kabuto",
  "articuno",
  "zapdos",
  "moltres",
  "dragonair",
  "chikorita",
  "bayleef",
  "meganium",
  "cyndaquil",
  "quilava",
  "croconaw",
  "hoothoot",
  "noctowl",
  "ledyba",
  "ledian",
  "spinarak",
  "ariados",
  "crobat",
  "chinchou",
  "lanturn",
  "pichu",
  "igglybuff",
  "xatu",
  "mareep",
  "flaaffy",
  "ampharos",
  "bellossom",
  "azumarill",
  "politoed",
  "hoppip",
  "skiploom",
  "jumpluff",
  "sunkern",
  "sunflora",
  "yanma",
  "espeon",
  "umbreon",
  "pineco",
  "forretress",
  "scizor",
  "shuckle",
  "slugma",
  "magcargo",
  "swinub",
  "piloswine",
  "remoraid",
  "octillery",
  "delibird",
  "mantine",
  "skarmory",
  "houndoom",
  "kingdra",
  "phanpy",
  "donphan",
  "porygon2",
  "tyrogue",
  "hitmontop",
  "elekid",
  "magby",
  "raikou",
  "entei",
  "suicune",
  "larvitar",
  "pupitar",
  "treecko",
  "grovyle",
  "torchic",
  "combusken",
  "mudkip",
  "marshtomp",
  "swampert",
  "poochyena",
  "mightyena",
  "zigzagoon",
  "linoone",
  "electrike",
  "manectric",
  "plusle",
  "minun",
  "swalot",
  "carvanha",
  "sharpedo",
  "wailord",
  "numel",
  "camerupt",
  "torkoal",
  "spoink",
  "trapinch",
  "vibrava",
  "cacturne",
  "farfetchd",
  "grimer",
  "silcoon",
  "beautifly",
  "muk",
  "gastly",
  "haunter",
  "gengar",
  "onix",
  "drowzee",
  "hypno",
  "krabby",
  "exeggcute",
  "cubone",
  "marowak",
  "koffing",
  "rhyhorn",
  "rhydon",
  "tangela",
  "scyther",
  "jynx",
  "pinsir",
  "tauros",
  "gyarados",
  "lapras",
  "omanyte",
  "kabutops",
  "aerodactyl",
  "dratini",
  "typhlosion",
  "totodile",
  "feraligatr",
  "sentret",
  "furret",
  "cleffa",
  "togepi",
  "togetic",
  "natu",
  "marill",
  "sudowoodo",
  "aipom",
  "wooper",
  "quagsire",
  "murkrow",
  "cascoon",
  "slowking",
  "misdreavus",
  "girafarig",
  "dunsparce",
  "gligar",
  "steelix",
  "dustox",
  "lotad",
  "snubbull",
  "lombre",
  "ludicolo",
  "granbull",
  "seedot",
  "nuzleaf",
  "shiftry",
  "taillow",
  "swellow",
  "wingull",
  "pelipper",
  "qwilfish",
  "kirlia",
  "surskit",
  "masquerain",
  "heracross",
  "shroomish",
  "breloom",
  "slakoth",
  "vigoroth",
  "nincada",
  "ninjask",
  "sneasel",
  "shedinja",
  "whismur",
  "loudred",
  "makuhita",
  "hariyama",
  "teddiursa",
  "azurill",
  "nosepass",
  "delcatty",
  "aron",
  "lairon",
  "volbeat",
  "illumise",
  "ursaring",
  "roselia",
  "gulpin",
  "wailmer",
  "flygon",
  "corsola",
  "cacnea",
  "swablu",
  "altaria",
  "seviper",
  "houndour",
  "lunatone",
  "solrock",
  "barboach",
  "whiscash",
  "corphish",
  "stantler",
  "smoochum",
  "crawdaunt",
  "baltoy",
  "miltank",
  "lileep",
  "cradily",
  "blissey",
  "tyranitar",
  "anorith",
  "armaldo",
  "lugia",
  "ho-oh",
  "celebi",
  "sceptile",
  "blaziken",
  "feebas",
  "milotic",
  "castform",
  "ralts",
  "shuppet",
  "gardevoir",
  "slaking",
  "exploud",
  "skitty",
  "banette",
  "duskull",
  "sableye",
  "mawile",
  "aggron",
  "meditite",
  "medicham",
  "tropius",
  "chimecho",
  "wynaut",
  "clamperl",
  "grumpig",
  "spinda",
  "beldum",
  "zangoose",
  "claydol",
  "kecleon",
  "snorunt",
  "glalie",
  "dusclops",
  "spheal",
  "sealeo",
  "walrein",
  "huntail",
  "gorebyss",
  "relicanth",
  "luvdisc",
  "bagon",
  "shelgon",
  "salamence",
  "metang",
  "metagross",
  "regirock",
  "regice",
  "registeel",
  "slowbro",
  "lickitung",
  "chansey",
  "kangaskhan",
  "mr-mime",
  "snorlax",
  "dragonite",
  "mewtwo",
  "absol",
  "latias",
  "mew",
];

let currentCards = [],
  currentIndex = 1,
  lastIndex = 13;

getPokemonsNames();

window.addEventListener("scroll", scrolledResquest);

function scrolledResquest() {
  let heigthTop = Math.floor(+containerCards.getBoundingClientRect().bottom);

  if (currentIndex > 640) {
    document.onmousedown = () => {
      if (event.button === 1) return false;
    };
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

function insertCardsPerIndexNumber(currentCards) {
  const growingCards = currentCards.sort((a, b) => {
    return (
      parseInt(a.getAttribute("data-pokemon")) -
      parseInt(b.getAttribute("data-pokemon"))
    );
  });

  growingCards.forEach((card) => containerCards.appendChild(card));
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
  currentCards = [];
}
