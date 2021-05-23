const textArea = document.querySelector("textarea");
const choiceWrapper = document.querySelector(".choice-wrapper");
const modal = document.querySelector(".modal");
const arrTags = [];

function filterTag() {
  clearTags();

  textArea.value
    .split(",")
    .filter((valid) => valid !== "")
    .forEach((valueTag) => {
      if (!arrTags.includes(valueTag)) {
        arrTags.push(valueTag.trim());
      }
    });
  insertTag();
}

function clearTags() {
  choiceWrapper
    .querySelectorAll(".tag")
    .forEach((tagElement) => tagElement.remove());
}

function insertTag() {
  arrTags.forEach((tagValue) => {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerText = tagValue;
    choiceWrapper.prepend(tag);
  });
}

function randonTag() {
  const tags = document.querySelectorAll(".tag");
  let tagChosen = 0;
  let count = 0;

  const randonChoice = setInterval(() => {
    tags[tagChosen].classList.remove("choice");

    tagChosen = Math.round(Math.random() * (tags.length - 1));

    tags[tagChosen].classList.add("choice");

    count++;

    if (count > 10) {
      clearInterval(randonChoice);
      showWin(tags[tagChosen]);
    }
  }, 500);

  textArea.value = "";
}

function showWin(win) {
  modal.querySelector(".congrats p").innerText = win.innerText;

  modal.classList.add("show");
}

textArea.addEventListener("keyup", ({ key }) => {
  if (key === ",") filterTag();
});

textArea.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") randonTag();
});

modal.addEventListener("click", () => {
  if (event.target === modal) {
    modal.classList.remove("show");
    window.location.reload();
    textArea.focus();
  }
});
