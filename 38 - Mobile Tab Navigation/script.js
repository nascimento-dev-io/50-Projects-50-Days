const itemsMenu = document.querySelectorAll("ul > div");

const display = document.querySelector(".display");

const backgrounds = {
  home: "https://images.pexels.com/photos/4297820/pexels-photo-4297820.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  work: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  blog: "https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  about:
    "https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};

itemsMenu.forEach((item) => {
  item.addEventListener("click", () => {
    itemsMenu.forEach((item) => item.classList.remove("active"));
    changeBackground(item);
  });
});

function changeBackground(item) {
  item.classList.add("active");

  display.style.backgroundImage = ` url(${backgrounds[item.classList[0]]}`;
}
