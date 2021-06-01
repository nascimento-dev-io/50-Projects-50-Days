const showNotification = document.querySelector(".btn-notification");
const toastContainer = document.querySelector(".toast-wrapper");

showNotification.addEventListener("click", showToastNotification);

const arrTypes = ["error", "info", "success"];
const toasts = toastContainer.childNodes;

function showToastNotification() {
  // <div class="toast red">Alguma notificação</div>

  const div = document.createElement("div");
  div.classList.add("toast");
  div.classList.add(arrTypes[Math.floor(Math.random() * 3)]);
  div.textContent = `Notification ${Math.floor(Math.random() * 3)}`;

  toastContainer.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}
