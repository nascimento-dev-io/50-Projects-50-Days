const images = document.querySelectorAll(".image-content");

const resizeImage = ({ target }) => {
  images.forEach((e) => e.classList.remove("active"));
  target.classList.add("active");
};
images.forEach((image) => {
  image.addEventListener("click", resizeImage);
});
