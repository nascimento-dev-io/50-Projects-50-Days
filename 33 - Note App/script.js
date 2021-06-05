const addNote = document.querySelector(".add-note");
const cardContainer = document.querySelector(".cards");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addNote.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const card = document.createElement("div");
  card.classList.add("note-card");

  card.innerHTML = `
  <div class="toolbar">
  <div class="edit"><i class="fa fa-edit"></i></div>
  <div class="delete"><i class="fa fa-trash"></i></div>
  </div>
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="note-text ${text ? "hidden" : ""}"></textarea>


`;

  cardContainer.insertBefore(card, cardContainer.firstElementChild);

  const textArea = card.querySelector(".note-text");
  const main = card.querySelector(".main");

  textArea.focus();
  textArea.value = text;
  main.innerHTML = marked(text);

  addEvents(card, textArea);
}

function addEvents(card, textArea) {
  textArea.addEventListener("input", (event) => {
    const { target } = event;

    card.querySelector(".main").innerHTML = marked(target.value);
    updateLocalStorage();
  });

  const deleteButton = card.querySelector(".toolbar .delete");
  deleteButton.addEventListener("click", () => {
    deleteCard(card);
  });

  const editButton = card.querySelector(".toolbar .edit");
  editButton.addEventListener("click", () => {
    editCard(card);
  });
}

function deleteCard(card) {
  card.remove();
  updateLocalStorage();
}

function editCard(card) {
  const main = card.querySelector(".main");
  const textArea = card.querySelector(".note-text");

  main.classList.toggle("hidden");
  textArea.classList.toggle("hidden");

  updateLocalStorage();
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
