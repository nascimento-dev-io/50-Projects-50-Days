const images = document.querySelectorAll(".image-content");

const addClassActive = ({ target }) => {
  removeClassesActive();
  target.classList.add("active");
};

const removeClassesActive = () => {
  images.forEach((e) => e.classList.remove("active"));
};

images.forEach((image) => {
  image.addEventListener("click", addClassActive);
});
