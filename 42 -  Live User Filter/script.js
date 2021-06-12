const url =
  "https://randomuser.me/api/?inc=picture,name,location,page=1&results=50";

const containerUsers = document.querySelector(".users");
const inputFilter = document.querySelector("#search");

let listCards = [];

getUsers();

async function getUsers() {
  const request = await fetch(url);
  const data = await request.json();
  const users = data;

  createCardUser(users);
}

function createCardUser(users) {
  const usersArray = users.results;

  usersArray.forEach((user) => {
    const image = user.picture.medium;
    const { first, last } = user.name;
    const { city, country } = user.location;

    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    listCards.push(userCard);

    userCard.innerHTML = ` <img src=${image} alt="">

      <div class="user-info">
        <span class="name"> ${first} ${last} </span>
        <span class="location">${city}, ${country}</span>
      </div>
    `;

    containerUsers.appendChild(userCard);
  });
}

inputFilter.addEventListener("input", filterUsers);

function filterUsers({ target }) {
  const nameOrLocation = target.value.toLowerCase();

  const regEx = new RegExp(`^${nameOrLocation}`);

  listCards.forEach((item) => {
    if (!item.innerText.toLowerCase().match(regEx)) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}
