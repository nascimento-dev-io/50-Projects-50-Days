const containers = document.querySelectorAll(".container");

// lidando o evento scroll dos elementos

// .offsetTop - retorna distancia do elemento para o top do parent

// .scrollY/.pageYOffset - retorna o número de pixels que o documento já rolou verticalmente.

// .innerHeight - retorna a altura da tela

// .getBoundingClientRect()  - retorna o tamanho de um elemento e sua posição relativa ao viewport (top / botton / left / right)

// distanceToTop = element.getBoundingClientRect().top

// animation = valueScrolling + heightViewport * 0.75 > distanceToTop;

const heightViewport = window.innerHeight;

let count = 0;
const showAnimation = (scrollingValue) => {
  count++;

  console.log(count);
  containers.forEach((container) => {
    const distanceToTop = container.getBoundingClientRect().top;

    const animation = scrollingValue + heightViewport * 0.6 > distanceToTop;

    animation
      ? container.classList.add("show")
      : container.classList.remove("show");
  });
};

let ticking = false;

// função que limita a quantidade de chamada ao evento
window.addEventListener("scroll", () => {
  const valueScrolling = window.scrollY;
  if (ticking) return;

  ticking = true;
  showAnimation(valueScrolling);

  setTimeout(function () {
    ticking = false;
  }, 300);
});

window.onload = () => showAnimation(window.scrollY);
