const inputTodo = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

let inputText = "";

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => createTodo(todo));
}

inputTodo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    inputText = event.target.value;

    inputTodo.value = "";

    createTodo({ text: inputText });
  }
});

function createTodo(todo) {
  const todoText = todo.text;

  const done = todo.done;

  const li = document.createElement("li");
  li.classList.add("todo");
  li.textContent = todoText;

  li.addEventListener("click", (event) => {
    event.target.classList.toggle("done");

    updateLS();
  });
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    event.target.remove();

    updateLS();
  });

  if (done) {
    li.classList.add("done");
  }

  todoList.appendChild(li);

  updateLS();
}

function updateLS() {
  todosEl = document.querySelectorAll(".todo");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      done: todoEl.classList.contains("done"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
