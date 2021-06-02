const url = "https://api.github.com/users/";

const searchNameProfile = document.querySelector(".search-input");
const profileContainer = document.querySelector(".profile-container");

let searchValue = "";

searchNameProfile.addEventListener("keydown", ({ key, target }) => {
  if (key === "Enter") {
    searchValue = target.value.trim();

    getUserGithub(searchValue);
    getRepos(searchValue);

    target.value = "";
  }
});

function getUserGithub(user) {
  // console.log("https://api.github.com/users/Nscmnt");
  axios
    .get(url + user)
    .then(({ data }) => createUserCard(data))
    .catch((err) => {
      if (err.response.status == 404) {
        profileContainer.textContent = "No profile with this username";
      }
    });
}

function createUserCard(data) {
  const { avatar_url, name, bio, followers, following, public_repos } = data;
  const card = `
  <img src=${avatar_url} alt="profile image" class="profile-picture" />

      <div class="profile-info">
        <span class="profile-name">${name}</span>

        <p class="profile-description">
          ${bio}
        </p>

        <div class="profile-follow">
          <div class="followers">${followers} Followers</div>
          <div class="following">${following} Fallowings</div>
          <div class="repos">${public_repos} Repos</div>
        </div>
        <div class="repos-tags">
         
       </div>
      </div>
  `;

  profileContainer.innerHTML = card;
}

function getRepos(user) {
  axios
    .get(url + user + "/repos?sort=created")
    .then(({ data }) => {
      addReposToCard(data);
    })
    .catch((err) => console.log("err"));
}

function addReposToCard(repos) {
  const tagContainer = document.querySelector(".repos-tags");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("tag");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    tagContainer.appendChild(repoEl);
  });
}
