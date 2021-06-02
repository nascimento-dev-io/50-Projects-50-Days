const imgCard = document.querySelector(".img-container");
const liked = document.querySelector("span#times");
let y,
  x,
  likedCount = 0;

imgCard.addEventListener("dblclick", (e) => {
  y = e.offsetY;
  x = e.offsetX;

  const span = document.createElement("span");
  span.classList.add("heart-animation");
  span.innerHTML = '<i class="fa fa-heart"></i>';

  span.style.top = `${y}px`;
  span.style.left = `${x}px`;

  imgCard.append(span);

  setTimeout(() => span.remove(), 1500);

  likedCount++;
  updateLiked(likedCount);
});

function updateLiked(likedCount) {
  liked.textContent = likedCount;
}
